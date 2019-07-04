import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = ({ selectedPlace, onPlaceDelete, onClose }) => {
  return (
    <Modal animationType="slide" visible={true} style={styles.modal} onRequestClose={onClose}>
      <View style={styles.modalInner}>
        <Image source={selectedPlace.image} style={styles.image} />
        <Text style={styles.text}>{selectedPlace.name}</Text>
        <View>
          <TouchableOpacity onPress={onPlaceDelete}>
            <Icon size={30} name="ios-trash" color="red" />
          </TouchableOpacity>
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
  modalInner: {
    padding: 20
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
