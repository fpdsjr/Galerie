/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `photo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "photo_key_key" ON "photo"("key");
