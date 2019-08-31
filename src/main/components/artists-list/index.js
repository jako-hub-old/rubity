import React                from 'react';
import PropTypes            from 'prop-types';
import withPlayerState      from '../../../providers/withPlayerState';
import ArtistsListContent   from './ArtistsListContent';
import ArtistItem           from './ArtistItem';
import { withRouter }       from 'react-router-dom';

/**
 * This component allows to list all the artists.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class ArtistsList extends React.PureComponent {

    componentDidMount() {
        this.listArtists();
    }

    listArtists = async () => {
        if(this.props.artists.length === 0) {
            this.props.listArtists();
        }
    }

    onSelectItem = ({id}) => {
        this.props.history.push(`/albums/list/${id}`);
    };

    render() {
        const listItems = this.props.artists || [];
        return (
            <ArtistsListContent>
                {listItems.map((item, key) => (
                    <ArtistItem 
                        key     = { key         } 
                        name    = { item.name   }
                        image   = { item.image  }
                        onPress = { () => this.onSelectItem(item) }
                    />
                ))}
            </ArtistsListContent>
        );
    }
}

ArtistsList.propTypes = {
    artists         : PropTypes.array,// injected by provider.
    listArtists     : PropTypes.func, // injected by provider.
};

export default withRouter(withPlayerState(ArtistsList));