import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = ({ selectedPlace, onPlaceDelete, onClose }) => {
  return (
    <Modal animationType="slide" visible={true} style={styles.modal} onRequestClose={onClose}>
      <View>
        <Image source={selectedPlace.image} style={styles.image} />
        <Text style={styles.text}>{selectedPlace.name}</Text>
        <View>
          <Button title="Delete" color="red" onPress={onPlaceDelete} />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  text: {
    fontWeight: 'bold'
  }
});

export default placeDetail;