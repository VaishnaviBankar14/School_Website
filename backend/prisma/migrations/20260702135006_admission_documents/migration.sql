/*
  Warnings:

  - You are about to drop the column `documentUrl` on the `StudentAdmission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudentAdmission" DROP COLUMN "documentUrl",
ADD COLUMN     "addressProofUrl" TEXT,
ADD COLUMN     "birthCertificateUrl" TEXT,
ADD COLUMN     "otherDocumentUrl" TEXT,
ADD COLUMN     "parentAadharUrl" TEXT,
ADD COLUMN     "reportCardUrl" TEXT,
ADD COLUMN     "studentAadharUrl" TEXT,
ADD COLUMN     "transferCertificateUrl" TEXT;
