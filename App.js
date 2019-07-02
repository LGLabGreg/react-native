import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import placeImage from './src/assets/ibiza.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';

class App extends Component {
  onPlaceAdded = placeName => {
    this.props.onAddPlace(placeName, placeImage);
  };

  onPlaceDelete = () => {
    this.props.onDeletePlace();
  };

  onPlaceSelected = key => {
    this.props.onSelectPlace(key);
  };

  onModalClose = () => {
    this.props.onDeselectPlace();
  };

  render() {
    const { places, selectedPlace } = this.props;

    return (
      <View style={styles.container}>
        {selectedPlace && (
          <PlaceDetail
            selectedPlace={selectedPlace}
            onPlaceDelete={this.onPlaceDelete}
            onClose={this.onModalClose}
          />
        )}
        <PlaceInput onPlaceAdded={placeName => this.onPlaceAdded(placeName)} />
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, placeImage) => dispatch(addPlace(placeName, placeImage)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
