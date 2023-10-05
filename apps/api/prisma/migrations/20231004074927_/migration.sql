/*
  Warnings:

  - You are about to drop the column `avatar` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "avatar",
ADD COLUMN     "avatarId" TEXT;

-- CreateTable
CREATE TABLE "FileUpload" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "filePathUrl" TEXT NOT NULL,
    "thumbnailPathUrl" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "FileUpload_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "FileUpload"("id") ON DELETE SET NULL ON UPDATE CASCADE;
