const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllMovies = async () => {
  try {
    const allMovies = await prisma.movie.findMany({})
    return allMovies

  } catch (error) {
    throw error;

  }
}

module.exports = {
  prisma
};
