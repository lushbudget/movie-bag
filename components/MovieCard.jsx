import React, { useState } from 'react';
import { Text } from 'react-native';


const MovieCard = () => {
  const [allMovies, setAllMovies] = useState()
  const [movieToDisplay, setMovieToDisplay] = useState({});
  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/movie");
      const result = await response.json();
      setAllMovies(result);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  getMovies();
  console.log(allMovies)
  const randomNum = Math.random()
 

  return (
    <Text>MOVIE CARD</Text>
  )
}
export default MovieCard