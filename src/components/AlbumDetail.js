import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

// functional component b/c it serves just to present data to UI
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
