import React                    from 'react';
import { connect            }   from 'react-redux';
import { bindActionCreators }   from 'redux';
import { 
    listAlbums,
    listSongs,
    listArtists,
    setSelectedAlbum,
    setSelectedArtist,
} from '../store/actions/player.actions';

const mapDispatchToProps = dispatch => bindActionCreators({
    listAlbums,
    listSongs,
    listArtists,
    setSelectedAlbum,
    setSelectedArtist,
}, dispatch);

const mapStateToProps = ({ player:{artists=[], selectedArtist, selectedAlbum, songs=[], albums=[]} }) => ({
    artists,
    songs,
    albums,
    selectedAlbum,
    selectedArtist,
});

/**
 * This is a HOC (High order component) that allows to connect any component with 
 * redux states.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export default WrappedComponent => (connect(mapStateToProps, mapDispatchToProps)(
        props => (
        <WrappedComponent
            {...props}
        />)
    )
);