import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';


const MovieCard = ({movieToDisplay}) => {
  return (
    
    <View style={StyleSheet.card}>
      <View style={StyleSheet.cardContent}>
        <Text>{movieToDisplay.title}</Text>
        <Text>Director: {movieToDisplay.director}</Text>
        <Text>Release Year: {movieToDisplay.releaseYear}</Text>
        <Text>Rating: {movieToDisplay.rating}</Text>
        <Text>{movieToDisplay.plot}</Text>
        <Text>It's going to take {movieToDisplay.runTimeMins} minutes out of your day</Text>
        <Text>Actors: </Text>
        {movieToDisplay.actors.map((actor, index) => (
          <Text key={index}>{actor}</Text>
        ))}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center"

  },
  cardContent: {
     justifyContent: "center"

  }
})
export default MovieCard