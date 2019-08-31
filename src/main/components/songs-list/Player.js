import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.PureComponent {
    render() {
        const {
            onClose,
            songUrl,
        } = this.props;

        return (
            <div className="w-full flex justify-center items-center flex-col">
                <audio controls autoPlay loop>
                    <source src = { songUrl}  type="audio/mpeg" />
                </audio>
                <div className="mt-16">
                    <button onClick = { onClose }>
                        Volver
                    </button>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    onClose : PropTypes.func,
    songUrl : PropTypes.string,
};

export default Player;