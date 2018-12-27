import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        fetch("https://rallycoding.herokuapp.com/api/music_albums")
        .then(response => response.json())
        .then(json =>  {
            console.log(json);
            this.setState({ albums: json });
        })
        .catch(e => console.error(e));
    }

    renderAlbumFromStates() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} data={album} />);
    }

    render() {
        return (
            <View>{this.renderAlbumFromStates()}</View>
        );
    }
}

export default AlbumList;
