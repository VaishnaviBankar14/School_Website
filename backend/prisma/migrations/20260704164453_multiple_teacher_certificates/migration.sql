/*
  Warnings:

  - You are about to drop the column `certificateUrl` on the `TeacherApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TeacherApplication" DROP COLUMN "certificateUrl",
ADD COLUMN     "certificateUrls" TEXT[];
