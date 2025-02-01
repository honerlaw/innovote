/*
  Warnings:

  - You are about to drop the column `roleName` on the `UserOrganizationRole` table. All the data in the column will be lost.
  - Added the required column `roleType` to the `UserOrganizationRole` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "UserOrganizationRole" DROP COLUMN "roleName",
ADD COLUMN     "roleType" "RoleType" NOT NULL;
