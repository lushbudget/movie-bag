import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton';

const Home = () => {
  return (
    <>
    <Text> THIS IS MOVIE BAG</Text>
    <Button title="pick a card, any card" onPress={console.log('butt')} />
    </>
  )
}

export default Home

