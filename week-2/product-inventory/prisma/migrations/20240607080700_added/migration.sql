/*
  Warnings:

  - Added the required column `productName` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productType` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "productType" TEXT NOT NULL;
