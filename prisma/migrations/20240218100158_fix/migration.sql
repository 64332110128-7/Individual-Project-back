/*
  Warnings:

  - You are about to alter the column `weight` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `weight` INTEGER NOT NULL;
