import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeButton from "react-native-really-awesome-button";


const BackToStartButton = ({ onPress }) => {
  return <AwesomeButton extra={
    <LinearGradient
      colors={["white", "orange", "orange", "pink"]}
      style={{ ...StyleSheet.absoluteFillObject, margin: 4 }} />
    }
    onPress={onPress}
    
    >
    back to the bag!
  </AwesomeButton>;
}



export default BackToStartButton;