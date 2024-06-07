/*
  Warnings:

  - You are about to drop the column `currentQuantity` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `unitQuantity` on the `Products` table. All the data in the column will be lost.
  - Added the required column `unitQuantity` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "currentQuantity",
ADD COLUMN     "unitQuantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "unitQuantity";
