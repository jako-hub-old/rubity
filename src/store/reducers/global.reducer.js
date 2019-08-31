import * as Actions from '../actions/global.actions';

const defaultState = {
    loading : false,
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case Actions.SET_LOADING: return ({
            ...state,
            loading : action.loading,
        });
        default : return ({...state});
    }
};