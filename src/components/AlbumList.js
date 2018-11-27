import  React, {Component} from 'react';
import {ScrollView} from 'react-native';

import AlbumDetail from './AlbumDetail'
class AlbumList extends Component {
    constructor(){
        super();
        this.state = {
            isLoading:true,
            albums:[]
        }
    }
   ComponentDidMount{
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        albums: responseJson.movies,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}
renderAlbums(){
    this.state.albums.map(album =>
         <AlbumDetail key={album.title} data={album}/>
        );
}

    
  render(){  
      return(
        <ScrollView>
        <Text>{this.renderAlbums()}</Text>
        </ScrollView>
    );
}
}

export default AlbumList; 