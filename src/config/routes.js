/**
 * This file contains all the application routes.
 */
import {
    AlbumsListScreen,
    ArtistsListScreen,
    PlayerScreen,
    SongsListScreen,
} from '../main/screens';

export default [
    {path : '/artsts/list', component : ArtistsListScreen },
    {path : '/albums/:artist/list', component : AlbumsListScreen },
    {path : '/songs/:album/list', component : SongsListScreen },
    {path : '/songs/:song/play', component : PlayerScreen }
];