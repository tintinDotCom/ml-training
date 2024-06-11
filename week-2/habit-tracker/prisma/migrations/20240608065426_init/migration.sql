/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Habit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[habitId]` on the table `Progress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Progress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `habitId` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Progress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Progress" ADD COLUMN     "habitId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Habit_userId_key" ON "Habit"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Progress_habitId_key" ON "Progress"("habitId");

-- CreateIndex
CREATE UNIQUE INDEX "Progress_userId_key" ON "Progress"("userId");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("habitId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
