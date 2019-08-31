import React                    from 'react';
import { connect            }   from 'react-redux';
import { bindActionCreators }   from 'redux';
import { 
    listAlbums,
    listSongs,
    listArtists,
} from '../store/actions/player.actions';

const mapDispatchToProps = dispatch => bindActionCreators({
    listAlbums,
    listSongs,
    listArtists,
}, dispatch);

const mapStateToProps = ({ player:{artists=[], songs=[], albums=[]} }) => ({
    artists,
    songs,
    albums,
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