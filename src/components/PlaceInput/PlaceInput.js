import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = placeName => {
    this.setState({
      placeName
    });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;
    if (!placeName.trim()) {
      return;
    }

    this.props.onPlaceAdded(placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
