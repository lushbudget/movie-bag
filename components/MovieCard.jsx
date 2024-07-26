import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';


const MovieCard = () => {
  const [allMovies, setAllMovies] = useState({})
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
  useEffect(() => {
    getMovies();
  }, [])

  const randomNum = Math.floor(Math.random() * allMovies.length);
  for (let i = 0; i < allMovies.length; i++) {
    let curMov = allMovies[i];
    if (curMov.id === randomNum) {
      setMovieToDisplay(curMov);
    }
  }
  console.log(movieToDisplay)


  return (
    <View style={StyleSheet.card}>
      <View style={StyleSheet.cardContent}>
        <Text>{movieToDisplay.title}</Text>
        <Text>Release Year: {movieToDisplay.releaseYear}</Text>
        <Text>Rating: {movieToDisplay.rating}</Text>
        <Text>{movieToDisplay.plot}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  card: {

  },
  cardContent: {
    textShadowColor: "blue"

  }
})
export default MovieCard