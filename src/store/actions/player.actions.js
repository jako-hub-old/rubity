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

export const listArtists = () => async (dispatch) => {

};

export const listAlbums = (artists) => async (dispatch) => {
     
};

export const listSongs = () => async (dispatch) => {
     
};