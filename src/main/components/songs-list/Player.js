import React from 'react';
import PropTypes from 'prop-types';
import SuggestedSongs from './SongsSuggestion';
import MusicPlayer from '../MusicPlayer';

/**
 * This component renders the audio player.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
const Player = React.forwardRef(({
    onClose,
    songUrl,
    songs,
    onSelectSong,
}, ref) => (
    <div className="w-full flex justify-center items-center flex-col">
        <MusicPlayer
            ref     = { ref }
            songUrl = { songUrl }
        />
        <SuggestedSongs 
            songs           = { songs }
            onSelectSong    = { onSelectSong }
        />
        <div className="mt-8">
            <button onClick = { onClose }>
                Volver
            </button>
        </div>
    </div>
));

Player.propTypes = {
    onClose : PropTypes.func,
    songUrl : PropTypes.string,
    onSelectSong : PropTypes.func,
};

export default Player;