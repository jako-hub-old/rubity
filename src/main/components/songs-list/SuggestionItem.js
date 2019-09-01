import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component renders a suggestion song.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const SuggestionItem = ({name, onPress}) => {
    return (
        <div className="suggestion-item" onClick = { onPress }>
            <p>{name}</p>
        </div>
    );
};

SuggestionItem.propTypes = {
    name    : PropTypes.string,
    onPress : PropTypes.func,
};

export default SuggestionItem;