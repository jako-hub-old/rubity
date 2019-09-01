import React from 'react';
import PropTypes from 'prop-types';
import SuggestedSongs from './SongsSuggestion';

const Player = ({
    onClose,
    songUrl,
    songs,
    onSelectSong,
}) => (
    <div className="w-full flex justify-center items-center flex-col">
        <audio id = "audio-player" controls autoPlay loop>
            <source src = { songUrl}  type="audio/mpeg" />
        </audio>
        <SuggestedSongs 
            songs = { songs }
            onSelectSong = { onSelectSong }
        />
        <div className="mt-8">
            <button onClick = { onClose }>
                Volver
            </button>
        </div>
    </div>
);

Player.propTypes = {
    onClose : PropTypes.func,
    songUrl : PropTypes.string,
    onSelectSong : PropTypes.func,
};

export default Player;