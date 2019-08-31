import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component allows to render a single artists.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const ArtistItem = ({name, onPress, image}) => (
    <div onClick = { onPress } className = "artist-item" style = { { backgroundImage : `url(${image})` } }>
        <p>{name}</p>
    </div>
);

ArtistItem.propTypes = {
    image   : PropTypes.string,
    name    : PropTypes.string,
    onPress : PropTypes.func,
};

export default ArtistItem;