import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, borderShadow } from 'react-native';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from './components/CustomButton';
import AddMovieToDb from './components/AddMovieToDb';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'MOVIEBAG' }}
        />
        <Stack.Screen
        name="Add"
        component={AddMovieToDb}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(140, 230, 300, 1)',
    borderWidth: 30,
    padding: 10,
    backgroundColor: 'rgba(159, 226, 191, .75)',
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },

    borderRadius: 45,
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
