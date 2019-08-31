import * as Actions from '../actions/player.actions';

const defaultState = {
    artists : [],
    albums  : {},
    songs   : {},
    selectedArtist : null,
    selectedAlbum   : null,
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case Actions.SET_ARTISTS: return ({
            ...state,
            artists : action.data,
        });
        case Actions.SET_ALBUMS: return ({
            ...state,
            albums : action.data,
        });
        case Actions.SET_SELECTED_ARTIST : return ({
            ...state,
            selectedArtist : action.data,
        });
        case Actions.SET_SELECTED_ALBUM : return ({
            ...state,
            selectedAlbum :  action.data,
        });
        case Actions.SET_SONGS: return ({
            ...state,
            songs : action.data,
        });
        default : return ({...state});
    }
};