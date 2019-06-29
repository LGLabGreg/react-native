import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placesList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.name}
          placeImage={item.image}
          onPlacePressed={() => props.onPlaceSelected(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    width: '100%'
  }
});

export default placesList;
