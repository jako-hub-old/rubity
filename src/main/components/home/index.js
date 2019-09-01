import React from 'react';
import { withRouter } from 'react-router-dom';
import withPlayerState from '../../../providers/withPlayerState';
import FindArtistCall from './FindArtistsCall';

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
            </div>
        );
    }
}

export default withRouter(withPlayerState(Home));