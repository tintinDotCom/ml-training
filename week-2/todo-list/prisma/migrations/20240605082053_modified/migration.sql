/*
  Warnings:

  - You are about to drop the column `status` on the `ToDo` table. All the data in the column will be lost.
  - Added the required column `completed` to the `ToDo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ToDo" DROP COLUMN "status",
ADD COLUMN     "completed" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "Status";
