import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// functional component b/c it serves just to present data to UI
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
