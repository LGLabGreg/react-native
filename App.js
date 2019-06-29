import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import placeImage from './src/assets/ibiza.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

class App extends Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  };

  onPlaceNameChange = placeName => {
    this.setState({
      placeName
    });
  };

  onPlaceSubmit = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState(state => ({
      places: [
        ...state.places,
        {
          key: Math.random().toString(),
          name: state.placeName,
          image: placeImage
        }
      ]
    }));
  };

  onPlaceSelected = key => {
    this.setState(state => ({
      selectedPlace: state.places.find(place => place.key === key)
    }));
  };

  onPlaceDelete = () => {
    this.setState(state => ({
      places: state.places.filter(place => place.key !== state.selectedPlace.key),
      selectedPlace: null
    }));
  };

  onModalClose = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    const { placeName, places, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        {selectedPlace && (
          <PlaceDetail
            selectedPlace={selectedPlace}
            onPlaceDelete={this.onPlaceDelete}
            onClose={this.onModalClose}
          />
        )}
        <PlaceInput
          placeName={placeName}
          onPlaceNameChange={this.onPlaceNameChange}
          onPlaceSubmit={this.onPlaceSubmit}
        />
        <PlacesList places={places} onPlaceSelected={key => this.onPlaceSelected(key)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },

  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  }
});

export default App;
