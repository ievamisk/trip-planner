import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from '../../node_modules/react-native-gesture-handler';

class Hello extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <TextInput style={styles.textInput} underlineColorAndroid='transparent' placeholder='this is bullshit'></TextInput>
      </View>
    );
  }
}

export { Hello }

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    width: 300,
    
  },
});


