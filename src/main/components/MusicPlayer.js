import React from 'react';

/**
 * This component renders an adio player
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const MusicPlayer = React.forwardRef(({id="audio-player", songUrl}, ref) => (
    <audio ref = { ref } id = {id} controls autoPlay loop>
        <source src = { songUrl}  type="audio/mpeg" />
    </audio>
));

export default MusicPlayer;