import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// class based component
// to fetch data, or when you have a large component that might need helper methods
class AlbumList extends Component {
  // class level prop
  // set up a default state for component - similar to a constructor in other tutorials
  state = { albums: [] };

  // life cycle methods
  // executed right before component is rendered to screen
  componentWillMount() {
    // since this goes first, good for making http requests
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
  }

  // only requirement is having a render method that returns some JSX
  render() {
    return (
      <View>
       <Text>Album List!</Text>
      </View>
    );
  }
 }

 export default AlbumList;
