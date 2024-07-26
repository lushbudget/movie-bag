import { Button, StyleSheet, Text, View, hidden, StatusBar, statusBarStyle, statusBarTransition } from 'react-native';
import CustomButton from './CustomButton';
import { useState } from 'react';
import MovieCard from './MovieCard';

const Home = () => {
  const [havePicked, setHavePicked] = useState(false)
  //this is where I write the function to pick the movie
  const handlePress = () => {
    setHavePicked(true)
    console.log(`MOVIE`)

  }
  console.log(havePicked)
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      ></StatusBar>
      <View >
      {havePicked ? (
        <MovieCard />
      ) : (
        <CustomButton title="pick a movie" onPress={handlePress}></CustomButton>
      )}
      </View>
    </>
  )
}
export default Home

