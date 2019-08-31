import {
    combineReducers,
} from 'redux';
import global from './global.reducer';
import player from './player.reducer';

export default () => combineReducers({
    global,
    player,
});