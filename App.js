import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import {Image} from 'react-native-elements';
import NumberInput from './components/NumberInput';

export default function App() {
  return (
    <View style={styles.container}>

        <Text>
          Got a phone number in alphabetic format? Type it here to translate it into a real number.
        </Text>

        <Image
          source={require('./assets/favicon.png')}></Image>

        <NumberInput />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
