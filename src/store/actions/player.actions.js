import { fetchArtits } from "../../repositories/artists.repository";

export const SET_ARTISTS = '[PLAYER] SET_ARTISTS';
export const SET_ALBUMS  = '[PLAYER] SET_ALBUMS';
export const SET_SONGS   = '[PLAYER] SET_SONGS';

/*************************************
 ********   Action creators **********
 *************************************/

export const setArtists = (data) => ({
    type : SET_ARTISTS,
    data,
});

export const setAlbums = (data) => ({
    type : SET_ALBUMS,
    data,
});

export const setSongs = (data) => ({
    type : SET_SONGS,
    data,
});


/*************************************
 ********   Async functions **********
 *************************************/

/**
 * This function allows to fetch all artists only if they are not listed yet.
 */
export const listArtists = () => async (dispatch, getState) => {
    const {player={}} = getState();
    const {artists=[]} = player;
    try {
        if(artists.length === 0 ) {
            const newArtists = await fetchArtits();
            dispatch(setArtists(newArtists.data));
        } else {
            return artists;
        }
    } catch (e) {
        throw e;
    }
};

export const listAlbums = (artists) => async (dispatch) => {
     
};

export const listSongs = () => async (dispatch) => {
     
};