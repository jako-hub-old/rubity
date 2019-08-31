import React                from 'react';
import PropTypes            from 'prop-types';
import withPlayerState      from '../../../providers/withPlayerState';
import AlbumListContent     from './AlbumListContent';
import AlbumItem            from './AlbumItem';
import { withRouter }       from 'react-router-dom';

/**
 * This component allows to list all the albums.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class AlbumList extends React.Component {
    state = {
        albums : [],
    }
    componentDidMount() {
        this.listData();
    }

    listData = async () => {
        const {params} = this.props.match;
        // If there are not artist we loadthem, we need theme to print the selected artist.
        if(!this.props.artists.length) this.props.listArtists(params.artist);

        if(params.artist) {
            try {
                const albums = await this.props.listAlbums(params.artist);
                this.setState({
                    albums,
                })
            } catch (e) {
                alert('ERROR: while listing the albums');
            }
            
        } 
    }

    onSelectItem = (album) => {
        const {
            setSelectedArtist,  
            setSelectedAlbum, 
            artists=[], 
            history,
            match,
        } = this.props;
        let selectedArtist = this.props.selectedArtist;
        // This is only to ensure that if the page is reloaded we can get the selected artist.
        if(!selectedArtist) {
            selectedArtist = artists.find(item => item.id === parseInt(match.params.artist));
            setSelectedArtist(selectedArtist);
        }
        setSelectedAlbum(album);
        history.push(`/songs/list/${selectedArtist.id}/${album.id}`);
    };

    render() {
        return (
            <AlbumListContent>
                {this.state.albums.map((item, key) => (
                    <AlbumItem
                        key     = { key         } 
                        name    = { item.name   }
                        image   = { item.image  }
                        onPress = { () => this.onSelectItem(item) }
                    />
                ))}
            </AlbumListContent>
        );
    }
}

AlbumList.propTypes = {
    listAlbums     : PropTypes.func, // injected by provider.
};

export default withRouter(withPlayerState(AlbumList));