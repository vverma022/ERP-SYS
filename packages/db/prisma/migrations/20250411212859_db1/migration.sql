/*
  Warnings:

  - A unique constraint covering the columns `[pillar_name,department_id]` on the table `pillars` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pillar_name";

-- CreateIndex
CREATE UNIQUE INDEX "pillar_name_dept_id_unique" ON "pillars"("pillar_name", "department_id");
