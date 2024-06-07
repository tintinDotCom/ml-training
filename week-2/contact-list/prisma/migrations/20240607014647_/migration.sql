/*
  Warnings:

  - You are about to drop the column `firstName` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Contacts` table. All the data in the column will be lost.
  - Added the required column `contactName` to the `Contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contacts" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "contactName" TEXT NOT NULL;
