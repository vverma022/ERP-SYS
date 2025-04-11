/*
  Warnings:

  - You are about to drop the column `approved_by` on the `assigned_kpi` table. All the data in the column will be lost.
  - You are about to drop the column `department_id` on the `assigned_kpi` table. All the data in the column will be lost.
  - You are about to drop the column `kpi_id` on the `assigned_kpi` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `kpi` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `pillars` table. All the data in the column will be lost.
  - Added the required column `form_data` to the `assigned_kpi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "assigned_kpi" DROP CONSTRAINT "assigned_kpi_approved_by_fkey";

-- DropForeignKey
ALTER TABLE "assigned_kpi" DROP CONSTRAINT "assigned_kpi_department_id_fkey";

-- DropForeignKey
ALTER TABLE "assigned_kpi" DROP CONSTRAINT "assigned_kpi_kpi_id_fkey";

-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_hod_id_fkey";

-- DropForeignKey
ALTER TABLE "kpi" DROP CONSTRAINT "kpi_user_id_fkey";

-- DropForeignKey
ALTER TABLE "pillars" DROP CONSTRAINT "pillars_created_by_fkey";

-- DropIndex
DROP INDEX "fk_assigned_kpi_approver";

-- DropIndex
DROP INDEX "fk_assigned_kpi_department";

-- DropIndex
DROP INDEX "fk_assigned_kpi_kpi";

-- DropIndex
DROP INDEX "fk_pillars_created_by";

-- AlterTable
ALTER TABLE "assigned_kpi" DROP COLUMN "approved_by",
DROP COLUMN "department_id",
DROP COLUMN "kpi_id",
ADD COLUMN     "form_data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "kpi" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "pillars" DROP COLUMN "created_by";
