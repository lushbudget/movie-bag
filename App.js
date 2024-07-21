import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      <CustomButton title="PICK">BUTTON</CustomButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(140, 230, 300, 1)',
    borderWidth: 10,
    borderRadius: 4,
    borderStyle: 'solid',
    flex: 1,
    backgroundColor: 'rgba(159, 226, 191, .75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#007BFF',
    fontSize: 40,
  },
});
