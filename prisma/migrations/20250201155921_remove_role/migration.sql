/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectUserVote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOrganizationRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_eventId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUserVote" DROP CONSTRAINT "ProjectUserVote_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUserVote" DROP CONSTRAINT "ProjectUserVote_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserOrganizationRole" DROP CONSTRAINT "UserOrganizationRole_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "UserOrganizationRole" DROP CONSTRAINT "UserOrganizationRole_userId_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Organization";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectUserVote";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserOrganizationRole";
