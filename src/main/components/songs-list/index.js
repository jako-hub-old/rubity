import React                from 'react';
import PropTypes            from 'prop-types';
import withPlayerState      from '../../../providers/withPlayerState';
import { withRouter }       from 'react-router-dom';
import SongsListContent from './SongsListContent';
import SongItem from './SongItem';
import Player from './Player';

class SongsList extends React.Component {
    state = {
        songs   : [],
        loading : false,
        selectedSong : null,
    };

    constructor(props) {
        super(props);
        this.onSelectSong = this.onSelectSong.bind(this);
    }

    componentDidMount() {
        this.listData();
    }

    listData = async () => {
        const {
            artists,
            albums,
            listArtists,
            listAlbums,
            listSongs,
        } = this.props;
        const {params} = this.props.match;
        // If there are not artist we loadthem, we need theme to print the selected artist.
        try {
            if(!artists.length) {
                await listArtists(params.artist);
            }   
            if(!albums || !albums[params.artist]) {
                await listAlbums(params.artist, params.album);
            }
            const songs = await listSongs(params.album);
            this.setState({
                songs,
            });
        } catch(e) {
            alert("Error while listing the songs");
        }
    }

    onSelectSong = (selectedSong) => {
        this.setState({
            selectedSong,
        });
    };

    onClosePlayer = () => this.setState({selectedSong : null});

    render() {
        const {
            songs, selectedSong,
        } = this.state;
        return (
           <SongsListContent>
               {!selectedSong && songs.map((item, key) => (
                   <SongItem 
                        key     = { key } 
                        name    = { item.name } 
                        onPress = { () => this.onSelectSong(item) }
                        preview = { item.preview_url }
                    />
               ))}
               {selectedSong && (
                   <Player  
                        onClose = { this.onClosePlayer }
                        songUrl = { selectedSong.preview_url }
                   />
               )}
           </SongsListContent>
        );
    }
}

SongsList.propTypes = {
    listAlbums     : PropTypes.func, // injected by provider.
    listArtists    : PropTypes.func, // injected by provider.
    selectedArtist : PropTypes.any,  // injected by provider.
    selectedAlbum  : PropTypes.any,  // injected by provider.
};

export default withRouter(withPlayerState(SongsList));