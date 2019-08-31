import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component allows to render a single artists.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const AlbumItem = ({name, onPress, image}) => (
    <div className = "album-item-wrapper">
        <div onClick = { onPress } className = "album-item" style = { { backgroundImage : `url(${image})` } }>
        </div>
        <p>{name}</p>
    </div>
);

AlbumItem.propTypes = {
    image   : PropTypes.string,
    name    : PropTypes.string,
    onPress : PropTypes.func,
};

export default AlbumItem;