import React, { useState, useEffect } from 'react';
import { View, StatusBar, Button, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

import MovieCard from './MovieCard';
import BackToStartButton from './BackToStartButton.jsx';

const Home = ({ navigation }) => {
  const [havePicked, setHavePicked] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [movieToDisplay, setMovieToDisplay] = useState(null);

  const fetchAllMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/movie");
      const result = await response.json();
      console.log(result);
      setAllMovies(result);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  const handlePress = () => {
    if (allMovies && allMovies.length > 0) {
      const randomNum = Math.floor(Math.random() * allMovies.length + 1);
      console.log(randomNum)
      for (let i = 0; i < allMovies.length; i++) {
        let curMov = allMovies[i];
        if (curMov.id === randomNum) {
          setMovieToDisplay(curMov)
        }
      }
      setHavePicked(true);
    } else {
      console.error("No movies available to pick from.");
    }
  };

  const handleBackToStartPress = () => {
    setHavePicked(false)
  }

  return (
    <>
      <View style={styles.wholePage}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            barStyle="default"
            showHideTransition="fade"
            hidden={false}
          />
          <View>

            {havePicked ? (
              <>

                <MovieCard movieToDisplay={movieToDisplay} />
                <BackToStartButton onPress={handleBackToStartPress} />
              </>

            ) : (
              <CustomButton onPress={handlePress} title="Pick a movie" />
            )}
          </View>
        </View>
        <Button
          title='Go to add DB Page'
          onPress={() =>
            navigation.navigate('Add')

          } />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: 'white',

  },
  statusBar: {
    backgroundColor: 'black'

  },
  wholePage: {
    backgroundColor: 'black'
  }
})

export default Home;

