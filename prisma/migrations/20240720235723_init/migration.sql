-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "genre" TEXT[],
    "director" TEXT NOT NULL,
    "writer" TEXT NOT NULL,
    "actors" TEXT[],
    "plot" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "musicBy" TEXT NOT NULL,
    "runTimeMins" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
