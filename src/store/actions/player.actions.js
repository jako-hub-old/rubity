import { fetchArtists, fetchAlbums } from "../../repositories/artists.repository";

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
            const newArtists = await fetchArtists();
            dispatch(setArtists(newArtists.data));
        } else {
            return artists;
        }
    } catch (e) {
        throw e;
    }
};

/**
 * This function allows to load albums, it validates if there are albums in storage
 * associated with the artists, in that case it takes them from storage, otherwise 
 * it tries to loads them from API and associate them with the artists. 
 * This behavoiur is kind of dangerous if the amount of data is to much, but for this project
 * is ok. 
 * @param {*} artist 
 */
export const listAlbums = (artist) => async (dispatch, getState) => {
    const {player={}} = getState();
    const {albums={}} = player;
    try {
        if(!albums[artist]) {
            const newAlbums = await fetchAlbums(artist);
            dispatch(setAlbums({
                ...albums,
                [artist] : newAlbums.data,
            }));
            return newAlbums.data;
        } else {
            return albums[artist];
        }
    } catch (e) {
        throw e;
    }
};

export const listSongs = () => async (dispatch) => {
     
};