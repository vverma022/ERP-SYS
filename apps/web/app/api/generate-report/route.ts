import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { Document, Paragraph, TextRun, AlignmentType, HeadingLevel, Packer } from "docx";

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API || '' });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const prompt = `
      Create a professional report:
      Title: ${title}
      Description: ${description}
      Format: Include an executive summary, introduction, detailed analysis, findings, recommendations, and conclusion.
    `;

    const result = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });

    if (!result.text) {
      throw new Error("AI generation failed. No content returned.");
    }

    const reportContent = result.text;

    const doc = new Document({
      sections: [{
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: title, bold: true, size: 36 }),
            ],
          }),
          ...processContent(reportContent),
        ],
      }],
    });

    const buffer = await Packer.toBuffer(doc);

    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${encodeURIComponent(title)}_Report.docx"`);
    headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

    return new Response(buffer, { status: 200, headers });
  } catch (error) {
    console.error('Error generating report:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while generating the report' },
      { status: 500 }
    );
  }
}

function processContent(content) {
  return content.split('\n\n').map((section) => {
    if (!section.trim()) return null;

    if (section.startsWith('# ')) {
      return new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: section.substring(2), bold: true, size: 28 })],
      });
    }

    if (section.startsWith('## ')) {
      return new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: section.substring(3), bold: true, size: 26 })],
      });
    }

    return new Paragraph({ children: [new TextRun({ text: section, size: 22 })] });
  }).filter(Boolean);
}