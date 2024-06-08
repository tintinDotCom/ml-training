/*
  Warnings:

  - The primary key for the `Inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `inventoryId` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `lastUpdated` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `Inventory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_pkey",
DROP COLUMN "inventoryId",
DROP COLUMN "lastUpdated",
DROP COLUMN "productName",
DROP COLUMN "productType",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "unitQuantity" SET DEFAULT 0,
ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id");
