/*
  Warnings:

  - A unique constraint covering the columns `[short_url]` on the table `photo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `short_url` to the `photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "photo" ADD COLUMN     "short_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "photo_short_url_key" ON "photo"("short_url");
