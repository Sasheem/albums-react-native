import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // only requirement is having a render method that returns some JSX
  render() {
    console.log(this.state);
    return (
      <ScrollView>
       {this.renderAlbums()}
      </ScrollView>
    );
  }
 }

 export default AlbumList;

 /*
 def of state
 plain js object available to class based components only used to record & respond
 to user triggered events

 diff btwn props and states
 PROPS used to communicate from parent to child

 STATES used for components internal record keeping
 use state for updating some data over time...
 */
