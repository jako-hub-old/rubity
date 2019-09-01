import React                from 'react';
import PropTypes            from 'prop-types';
import withPlayerState      from '../../../providers/withPlayerState';
import { withRouter }       from 'react-router-dom';
import SongsListContent from './SongsListContent';
import SongItem from './SongItem';
import Player from './Player';
import { shuffleArray } from '../../../utils/functions';

/**
 * This component handles the songs list, 
 * it also fetch the artists and albums if the page was reloaded
 * @author JOrge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class SongsList extends React.Component {
    audioPlayer = null;
    state = {
        songs           : [],
        loading         : false,
        selectedSong    : null,
        suggestedSongs  : [],
    };

    constructor(props) {
        super(props);
        this.onSelectSong = this.onSelectSong.bind(this);
    }

    componentDidMount() {
        this.listData();
    }

    /**
     * This function allows to list the sons, it also fetch the artists and albums 
     * if the page was reloaded.
     */
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

    /**
     * If a song was selected we want to reset the player.
     */
    onSelectSong = (selectedSong, reload) => {
        this.setState({
            selectedSong,
            suggestedSongs : shuffleArray(this.state.songs).slice(0, 3)
        }, () => {
            if(reload) {
                if(this.audioPlayer) {
                    this.audioPlayer.load();
                    this.audioPlayer.play();
                }
            }
        });
    };

    onClosePlayer = () => this.setState({selectedSong : null});

    render() {
        const {
            songs, selectedSong,
            suggestedSongs = [],
        } = this.state;
        // const suggestedSongs = shuffleArray(songs).slice(0, 3);
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
                        ref             = { node => this.audioPlayer = node }
                        onClose         = { this.onClosePlayer }
                        songUrl         = { selectedSong.preview_url }
                        songs           = { suggestedSongs }
                        onSelectSong    = { item => this.onSelectSong(item, true) }
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