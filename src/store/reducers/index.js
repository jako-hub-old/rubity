import {
    combineReducers,
} from 'redux';
import global from './global.reducer';

export default () => combineReducers({
    global,
});