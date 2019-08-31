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
    {path : '/albums/list/:artist', component : AlbumsListScreen },
    {path : '/songs/list/:album', component : SongsListScreen },
    {path : '/songs/play/:song', component : PlayerScreen }
];