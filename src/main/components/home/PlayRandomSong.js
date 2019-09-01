import React from 'react';
import { fetchGenres, fetchRandom } from '../../../repositories/songs.repository';
import { shuffleArray } from '../../../utils/functions';
import MusicPlayer from '../MusicPlayer';

class PlayRandomSong extends React.Component {
    randomPlayer = null;

    state = {
        genres  : [],
        song    : null,
        loading : false,
    };

    componentDidMount() {
        this.fetchInformation();
    }
    
    fetchInformation = async () => {
        try {
            const genres = await fetchGenres();
            this.setState({
                genres : genres.data,
            });
        } catch (e) {
            alert("Error while listing genres");
        }
    };

    playRandomSong = async (attemps=0) => {
        this.setState({
            loading : true,
        });
        const maxAttemps = 2;
        try {
            const [randGenre] = shuffleArray(this.state.genres);
            const randSong = await fetchRandom(randGenre);
            const song = randSong.data;
            if(!song.preview_url && attemps < maxAttemps) {
                this.playRandomSong(attemps + 1);
            } else if(attemps >= maxAttemps) {
                alert('Sorry, try again');
            } else {
                this.setState({
                    song,
                }, () => {
                    if(this.randomPlayer) {
                        this.randomPlayer.load();
                        this.randomPlayer.play();
                    }
                });
            }
        } catch (e) {
            console.error(e);
            alert("Error getting random song");
        } finally {
            this.setState({
                loading : false,
            });
        }
    };

    render() {
        const song = this.state.song;
        return (
            <div className="w-full flex justify-center">
                <div className = "mt-8">
                    {song && song.preview_url && (
                        <>
                        <h4 className = "text text-center mb-8">{song.name}</h4>
                        <MusicPlayer
                            ref     = { node => this.randomPlayer = node }
                            id      = 'random-player'
                            songUrl = { song.preview_url }
                        />
                        </>
                    )}
                    <div className="mt-12 flex justify-center">
                        <button className="secondary" onClick = { () => this.playRandomSong() } >Play random</button>
                    </div>
                </div>
                
            </div>
        );  
    }
}

export default PlayRandomSong;