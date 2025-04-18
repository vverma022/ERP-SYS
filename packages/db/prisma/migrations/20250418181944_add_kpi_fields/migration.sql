-- AlterTable
ALTER TABLE "assigned_kpi" ADD COLUMN     "form_input" JSONB,
ADD COLUMN     "kpi_description" TEXT,
ADD COLUMN     "kpi_value" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "kpi" ADD COLUMN     "kpi_description" TEXT,
ADD COLUMN     "kpi_value" DOUBLE PRECISION;
