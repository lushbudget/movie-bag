import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';


const MovieCard = ({movieToDisplay}) => {
  return (
    
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.innerText}>{movieToDisplay.title}</Text>
        <Text style={styles.innerText}>Director: {movieToDisplay.director}</Text>
        <Text style={styles.innerText}>Release Year: {movieToDisplay.releaseYear}</Text>
        <Text style={styles.innerText}>Rating: {movieToDisplay.rating}</Text>
        <Text style={styles.innerText}>{movieToDisplay.plot}</Text>
        <Text style={styles.innerText}>It's going to take {movieToDisplay.runTimeMins} minutes out of your day</Text>
        <Text style={styles.innerText}>The Stars: </Text>
        {movieToDisplay.actors.map((actor, index) => (
          <Text style={styles.innerText} key={index}>{actor}</Text>
        ))}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    color: 'white'

  },
  cardContent: {
     justifyContent: "center",
     color: 'white'

  },
  innerText: {
    color: 'white'
  }
})
export default MovieCard