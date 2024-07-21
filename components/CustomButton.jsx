import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>

  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(159, 226, 191, 1',
    fontSize: 30,
  },
});

export default CustomButton;