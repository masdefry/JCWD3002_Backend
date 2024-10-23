/*
  Warnings:

  - Added the required column `usersId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `usersId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
