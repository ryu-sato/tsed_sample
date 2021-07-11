-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gender" TEXT,
    "name" TEXT,
    "birthday" DATETIME NOT NULL,
    "department" TEXT,
    "payment" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
