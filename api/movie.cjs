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

movieRouter.post('/', async (req, res, next) => {
  try {
    const { title, releaseYear, genre, director, writer, actors, plot, rating, musicBy, runTimeMins } = req.body;
    console.log(`TITLE`, title);
    console.log(`RELASE YEASR`, releaseYear);
    const newMovieToPost = await prisma.movie.create({
      data: {
        title,
        releaseYear,
        genre,
        director,
        writer,
        actors,
        plot,
        rating,
        musicBy,
        runTimeMins
      },
    });
    return res.status(201).json(newMovieToPost);

  } catch (error) {
    return res.status(500).send("An error occurred while adding the movie.")
  }
})

movieRouter.put('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id)
  const { title, releaseYear, genre, director, writer, actors, plot, rating, musicBy, runTimeMins } = req.body
  try {
    const updatedMovie = await prisma.movie.update({
      where: {
        id
      },
      data: {
        title,
        releaseYear,
        genre,
        director,
        writer,
        actors,
        plot,
        rating,
        musicBy,
        runTimeMins
       }
    })
    return res.status(201).json(updatedMovie);
  } catch (error) {
    console.error(error)
    return res.status(500).send(`An error occurred while updating the movie.`)
  }
})


movieRouter.delete('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id)
  try {
    const deletedMovie = await prisma.movie.delete({
      where: {
        id
      },
    })

    return res.status(201).json(deletedMovie);
  } catch (error) {
    console.error(error)
    return res.status(500).send(`An error occurred while deleting the movie.`)
  }
})


module.exports = movieRouter;