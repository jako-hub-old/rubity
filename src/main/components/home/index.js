import React from 'react';
import { withRouter } from 'react-router-dom';
import withPlayerState from '../../../providers/withPlayerState';
import FindArtistCall from './FindArtistsCall';
import PlayRandomSong from './PlayRandomSong';

/**
 * This component contains the home presentation and a simple logic to list
 * the initial artists and the random player.
 * @author JOrge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class Home extends React.PureComponent {
    componentDidMount() {
        this.fetchInformation();
    }

    fetchInformation = async () => {
        try {
            await this.props.listArtists();
        } catch (e) {
            alert("Error while listing information");
        }
    };

    onCallToAction = () => {
        this.props.history.push('/artists/list');
    }

    render() {
        const {artists=[]} = this.props;
        return (
            <div className = "w-full">
                <FindArtistCall 
                    artists         = { artists.slice(0, 8) }
                    onCallToAction  = { this.onCallToAction.bind(this) }
                />
                <PlayRandomSong/>
            </div>
        );
    }
}

export default withRouter(withPlayerState(Home));