import React from 'react';
import PropTypes from 'prop-types';
import SuggestionItem from './SuggestionItem';

/**
 * This component renders the songs suggestion.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const SuggestedSongs = ({
    onSelectSong,
    songs=[],
}) => {
    
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <h3 className="text mt-12">Suggested songs</h3>
            <div className="flex justify-center mt-8">
                {songs.map(( item, key ) => (
                    <SuggestionItem 
                        key        = { key }
                        name       = { item.name }
                        onPress    = { () => onSelectSong(item) }
                    />
                ))}
            </div>
        </div>
    );
};

SuggestedSongs.propTypes = {
    onClose : PropTypes.func,
    songUrl : PropTypes.string,
};

export default SuggestedSongs;