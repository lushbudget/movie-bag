import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeButton from "react-native-really-awesome-button";


const BackToStartButton = ({ onPress }) => {
  return <AwesomeButton extra={
    <LinearGradient
      colors={["brown", "orange", "orange", "pink"]}
      style={{ ...StyleSheet.absoluteFillObject }} />
    }
    onPress={onPress}
    
    >
    back to the bag!
  </AwesomeButton>;
}



export default BackToStartButton;