-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'analyst', 'viewer');

-- CreateEnum
CREATE TYPE "Sentiment" AS ENUM ('positive', 'neutral', 'negative');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('new', 'reviewed', 'actioned');

-- CreateTable
CREATE TABLE "workspace" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspaceuser" (
    "workspaceid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "workspaceuser_pkey" PRIMARY KEY ("workspaceid","userid")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "sentiment" "Sentiment" NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspacefeedback" (
    "workspaceid" INTEGER NOT NULL,
    "feedbackid" INTEGER NOT NULL,

    CONSTRAINT "workspacefeedback_pkey" PRIMARY KEY ("workspaceid","feedbackid")
);

-- CreateTable
CREATE TABLE "theme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspacetheme" (
    "workspaceid" INTEGER NOT NULL,
    "themeid" INTEGER NOT NULL,

    CONSTRAINT "workspacetheme_pkey" PRIMARY KEY ("workspaceid","themeid")
);

-- CreateTable
CREATE TABLE "feedbacktheme" (
    "feedbackid" INTEGER NOT NULL,
    "themeid" INTEGER NOT NULL,

    CONSTRAINT "feedbacktheme_pkey" PRIMARY KEY ("feedbackid","themeid")
);

-- CreateTable
CREATE TABLE "embedding" (
    "id" SERIAL NOT NULL,
    "vector" TEXT NOT NULL,
    "feedbackid" INTEGER NOT NULL,

    CONSTRAINT "embedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "periodstart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "periodend" TIMESTAMP(3) NOT NULL,
    "contentJson" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspacereport" (
    "workspaceid" INTEGER NOT NULL,
    "reportid" INTEGER NOT NULL,

    CONSTRAINT "workspacereport_pkey" PRIMARY KEY ("workspaceid","reportid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "workspaceuser" ADD CONSTRAINT "workspaceuser_workspaceid_fkey" FOREIGN KEY ("workspaceid") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspaceuser" ADD CONSTRAINT "workspaceuser_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspacefeedback" ADD CONSTRAINT "workspacefeedback_workspaceid_fkey" FOREIGN KEY ("workspaceid") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspacefeedback" ADD CONSTRAINT "workspacefeedback_feedbackid_fkey" FOREIGN KEY ("feedbackid") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspacetheme" ADD CONSTRAINT "workspacetheme_workspaceid_fkey" FOREIGN KEY ("workspaceid") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspacetheme" ADD CONSTRAINT "workspacetheme_themeid_fkey" FOREIGN KEY ("themeid") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacktheme" ADD CONSTRAINT "feedbacktheme_feedbackid_fkey" FOREIGN KEY ("feedbackid") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacktheme" ADD CONSTRAINT "feedbacktheme_themeid_fkey" FOREIGN KEY ("themeid") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "embedding" ADD CONSTRAINT "embedding_feedbackid_fkey" FOREIGN KEY ("feedbackid") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspacereport" ADD CONSTRAINT "workspacereport_workspaceid_fkey" FOREIGN KEY ("workspaceid") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspacereport" ADD CONSTRAINT "workspacereport_reportid_fkey" FOREIGN KEY ("reportid") REFERENCES "report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
