-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "user_name" CHAR(50) NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_role" TEXT NOT NULL DEFAULT 'faculty',
    "dept_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "departments" (
    "dept_id" SERIAL NOT NULL,
    "dept_name" TEXT NOT NULL,
    "hod_id" INTEGER,
    "dept_creation" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "hod_name" TEXT,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("dept_id")
);

-- CreateTable
CREATE TABLE "pillars" (
    "pillar_id" SERIAL NOT NULL,
    "pillar_name" TEXT NOT NULL,
    "pillar_creation" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "pillars_pkey" PRIMARY KEY ("pillar_id")
);

-- CreateTable
CREATE TABLE "assigned_kpi" (
    "assigned_kpi_id" SERIAL NOT NULL,
    "kpi_id" INTEGER NOT NULL,
    "pillar_id" INTEGER NOT NULL,
    "kpi_name" VARCHAR(255) NOT NULL,
    "kpi_status" VARCHAR(50) NOT NULL,
    "added_date" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "resolved_date" TIMESTAMP(3),
    "approved_by" INTEGER,
    "comments" TEXT,

    CONSTRAINT "assigned_kpi_pkey" PRIMARY KEY ("assigned_kpi_id")
);

-- CreateTable
CREATE TABLE "kpi" (
    "kpi_id" SERIAL NOT NULL,
    "kpi_name" TEXT NOT NULL,
    "kpi_created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "kpi_updated_at" TIMESTAMP(3),
    "form_data" JSONB NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "kpi_pkey" PRIMARY KEY ("kpi_id")
);

-- CreateTable
CREATE TABLE "qoc" (
    "qoc_id" SERIAL NOT NULL,
    "qoc_name" VARCHAR(255) NOT NULL,
    "qoc_email" TEXT NOT NULL,
    "qoc_password" TEXT NOT NULL,
    "qoc_role" VARCHAR(50) NOT NULL,

    CONSTRAINT "qoc_pkey" PRIMARY KEY ("qoc_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email" ON "users"("user_email");

-- CreateIndex
CREATE INDEX "fk_users_dept" ON "users"("dept_id");

-- CreateIndex
CREATE UNIQUE INDEX "dept_name" ON "departments"("dept_name");

-- CreateIndex
CREATE INDEX "fk_departments_hod" ON "departments"("hod_id");

-- CreateIndex
CREATE UNIQUE INDEX "pillar_name" ON "pillars"("pillar_name");

-- CreateIndex
CREATE INDEX "fk_pillars_created_by" ON "pillars"("created_by");

-- CreateIndex
CREATE INDEX "fk_pillars_department" ON "pillars"("department_id");

-- CreateIndex
CREATE INDEX "fk_assigned_kpi_kpi" ON "assigned_kpi"("kpi_id");

-- CreateIndex
CREATE INDEX "fk_assigned_kpi_pillar" ON "assigned_kpi"("pillar_id");

-- CreateIndex
CREATE INDEX "fk_assigned_kpi_approver" ON "assigned_kpi"("approved_by");

-- CreateIndex
CREATE UNIQUE INDEX "kpi_name" ON "kpi"("kpi_name");

-- CreateIndex
CREATE INDEX "idx_kpi_name" ON "kpi"("kpi_name");

-- CreateIndex
CREATE UNIQUE INDEX "qoc_qoc_email_key" ON "qoc"("qoc_email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_dept_id_fkey" FOREIGN KEY ("dept_id") REFERENCES "departments"("dept_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_hod_id_fkey" FOREIGN KEY ("hod_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pillars" ADD CONSTRAINT "pillars_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pillars" ADD CONSTRAINT "pillars_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("dept_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assigned_kpi" ADD CONSTRAINT "assigned_kpi_kpi_id_fkey" FOREIGN KEY ("kpi_id") REFERENCES "kpi"("kpi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assigned_kpi" ADD CONSTRAINT "assigned_kpi_pillar_id_fkey" FOREIGN KEY ("pillar_id") REFERENCES "pillars"("pillar_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assigned_kpi" ADD CONSTRAINT "assigned_kpi_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kpi" ADD CONSTRAINT "kpi_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
