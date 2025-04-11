/*
  Warnings:

  - Added the required column `department_id` to the `assigned_kpi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "assigned_kpi" ADD COLUMN     "department_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "fk_assigned_kpi_department" ON "assigned_kpi"("department_id");

-- AddForeignKey
ALTER TABLE "assigned_kpi" ADD CONSTRAINT "assigned_kpi_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("dept_id") ON DELETE CASCADE ON UPDATE CASCADE;
