import React from 'react';
import PropTypes from 'prop-types';

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