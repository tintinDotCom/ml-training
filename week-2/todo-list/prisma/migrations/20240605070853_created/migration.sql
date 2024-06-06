-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ToDo', 'OnGoing', 'Done');

-- CreateTable
CREATE TABLE "ToDo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "due" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);
