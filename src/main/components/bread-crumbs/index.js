import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../styles/breadcrumbs.css';
import Breadcrumb from './Breadcrumb';
import withPlayerState from '../../../providers/withPlayerState';

/**
 * This component handles the breadcrumb, its a simple breadcrumb, only for this project,
 * a more complex breadcrumb handler should be different. 
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class Breadcrumbs extends React.Component {

    /**
     * This function returns the breadcrumb name, it extract the data from 
     * the selected artist and album from the storage.
     */
    resolveCrumbName = ({type, label}) => {
        if(!type) return label;
        const { selectedArtist, selectedAlbum } = this.props;
        if(type === 'artist') {
            return (selectedArtist && selectedArtist.name)? selectedArtist.name : label;
        } else if(type === 'album') {
            return (selectedAlbum && selectedAlbum.name)? selectedAlbum.name : label;
        }
    }

    /**
     * This function determines where to send when click on a breadcrumb option
     */
    sendTo = ({type}, to) => {
        const { selectedArtist, history } = this.props;
        if(type === 'artist') {
            history.push("/artists/list");
        } else if(type === 'album') {
            history.push(`/albums/list/${selectedArtist.id}`);
        } else {
            history.push(to);
        }
    };

    render() {
        const {items=[]} = this.props;
        return (
            <div className="breadcrumb-root">
                {items.map((item, key) => (
                    <Breadcrumb 
                        key     = { key          } 
                        label   = { this.resolveCrumbName(item)} 
                        to      = { item.to      }
                        current = { item.current }
                        onPress = { () => this.sendTo(item, item.to) }
                    />
                ))}
            </div>
        );
    }
}

Breadcrumbs.propTypes = {
    artist  : PropTypes.array,
    items   : PropTypes.arrayOf(PropTypes.shape({
        label   : PropTypes.string,
        to      : PropTypes.string,
    })),
};

export default withPlayerState(withRouter(Breadcrumbs));