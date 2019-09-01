import React from 'react';

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