import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

export const addPlace = (placeName, placeImage) => {
  return {
    type: ADD_PLACE,
    placeName,
    placeImage
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};
