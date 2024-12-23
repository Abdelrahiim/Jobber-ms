/*
  Warnings:

  - You are about to drop the `Permision` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PermisionToRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PermissionType" AS ENUM ('MANAGE', 'READ', 'CREATE', 'UPDATE', 'DELETE');

-- DropForeignKey
ALTER TABLE "_PermisionToRole" DROP CONSTRAINT "_PermisionToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermisionToRole" DROP CONSTRAINT "_PermisionToRole_B_fkey";

-- DropTable
DROP TABLE "Permision";

-- DropTable
DROP TABLE "_PermisionToRole";

-- DropEnum
DROP TYPE "PermisionType";

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "name" "PermissionType" NOT NULL DEFAULT 'READ',

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PermissionToRole_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Permission_id_key" ON "Permission"("id");

-- CreateIndex
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole"("B");

-- AddForeignKey
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
