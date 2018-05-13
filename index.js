// import libraries to help create components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// a component is a javascript function that returns some amount of jsx
// react native takes that component and renders it to the screen
//  decides based on the jsx returned, will decide how it looks on the screen

// render this component to device
AppRegistry.registerComponent('Albums', () => App);
