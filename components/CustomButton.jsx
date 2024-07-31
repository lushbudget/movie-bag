import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeButton from "react-native-really-awesome-button";


const CustomButton = ({ onPress }) => {
  
  return <AwesomeButton extra={
    <LinearGradient
      colors={["black", "pink", "orange", "red"]}
      style={{ ...StyleSheet.absoluteFillObject }} />
    }
    onPress={onPress}
    
    >
    pick a movie
  </AwesomeButton>;
}



export default CustomButton;