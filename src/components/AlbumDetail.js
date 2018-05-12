import React from 'react';
import { View, Text } from 'react-native';

// functional component b/c it serves just to present data to UI
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
