import React                from 'react';
import PropTypes            from 'prop-types';
import withPlayerState      from '../../../providers/withPlayerState';
import { withRouter }       from 'react-router-dom';

class SongsList extends React.Component {

    componentDidMount() {
        this.listData();
    }

    listData = async () => {
        const {
            artists,
            albums,
            listArtists,
            listAlbums,
        } = this.props;
        const {params} = this.props.match;
        // If there are not artist we loadthem, we need theme to print the selected artist.
        if(!artists.length) {
            await listArtists(params.artist);
        }   
        if(!albums || !albums[params.artist]) {
            await listAlbums(params.artist, params.album);
        }
    }

    render() {
        return (
           null
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