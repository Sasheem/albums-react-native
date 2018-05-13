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


/*
  Major Concepts
  1. made project using react-native cli
      can run in android and ios simulator
  2. react-native run-ios / run-android
  3. made a few components
    class components
      life cycle methods and states
    functional components
      presentational components that produce jsx and present data to user
  4. states -> see componentWillMount method
    class based components only
    used to record and react to user interaction
    fetched a list of albums
    updated state using setState call
      can only use setState to update states
      setState automatically re-renders
  5. Mapped over our list of items (albums)
    for each album we retrieved, produced on Album Detail
      passed each album to AlbumDetail via a prop
      remember pros are parent to child component data transfer
  6. made extensive use of reusable components
    Button, Card, CardSection, and Header

  Finished by Sasheem Snell
  5.13.18
  Udemy Follow
*/
