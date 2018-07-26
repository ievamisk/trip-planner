import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Hello } from './src/components/hello';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>wut?</Text>
        <Hello/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
