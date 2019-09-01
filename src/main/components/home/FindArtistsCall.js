import React from 'react';

/**
 * This component contains a simple invitation to guide the user through the navigation.
 * @author JOrge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const FindArtistCall = ({artists=[], onCallToAction}) => (
    <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center mt-12">
            {artists.map((item, key) => (
                <img
                    className = "artist-item-small"
                    key = { key }
                    alt = { item.name }
                    src = { item.image }
                />
            ))}
        </div>
        <div className="mt-12">
            <button onClick = { onCallToAction } >Find artists</button>
        </div>
    </div>
);

export default FindArtistCall;