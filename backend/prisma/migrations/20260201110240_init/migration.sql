/*
  Warnings:

  - You are about to alter the column `balance` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `savings` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `balance` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `savings` DOUBLE NOT NULL DEFAULT 0;
