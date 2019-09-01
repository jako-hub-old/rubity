import React from 'react';
import {FaPlay} from 'react-icons/fa';
import classNames from 'classnames';
/**
 * This component renders a song item list.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export default ({name, onPress, preview}) => {
    return (
        <div 
            className   = {classNames({"song-item" : true, "preview" : preview})} 
            onClick     = { () => preview? onPress() : null }
        >
            <p>{name}</p>
            {preview && (
                <FaPlay className = 'song-icon' />
            )}
        </div>
    );
};