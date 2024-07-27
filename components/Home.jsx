import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import CustomButton from './CustomButton';
import { Button } from 'react-native';
import MovieCard from './MovieCard';
import BackToStartButton from './BackToStartButton.jsx';

const Home = ({navigation}) => {
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
      const randomNum = Math.floor(Math.random() * allMovies.length);
      for (let i = 0; i < allMovies.length; i ++) {
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

  console.log(havePicked);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View>
        <Button
        title='Go to add DB Page'
        onPress={() => 
          navigation.navigate('Add')
          
        }/>
        {havePicked ? (
          <>
          <BackToStartButton onPress={handleBackToStartPress}/>
          <MovieCard movieToDisplay={movieToDisplay} />
          
          </>
          
        ) : (
          <CustomButton onPress={handlePress} title="Pick a movie" />
        )}
      </View>
    </>
  );
};

export default Home;

