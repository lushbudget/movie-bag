const express = require('express');
const movieRouter = express.Router()
const { prisma } = require("../db/index.js");


const getAllMovies = async () => {
  try {
    const allMovies = await prisma.movie.findMany({})
    console.log(allMovies)
    return allMovies

  } catch (error) {
    throw error;

  }
}

movieRouter.get('/', async (req, res, next) => {
  try {
    const allMovies = await getAllMovies();
    res.send(allMovies)
    
  } catch (error) {
    console.log(error)
    
  }
})

module.exports = movieRouter;