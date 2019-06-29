import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="An awesome place"
      value={props.placeName}
      onChangeText={props.onPlaceNameChange}
    />
    <Button title="Add" style={styles.button} onPress={props.onPlaceSubmit} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  button: {
    width: '30%'
  }
});

export default placeInput;
