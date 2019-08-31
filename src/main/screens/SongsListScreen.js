import React from 'react';
import MainScreenLayout from './screen-layouts/MainScreenLayout';
import Breadcrumbs from '../components/bread-crumbs';
import { SongsList } from '../components';

const breadcrumbs = [
    {label : "Home", to : "/"},
    {label : "Artists", to: "/artists/list", type : 'artist'},
    {label : "Albums", to: "/albums/list/:artist", type : 'album'},
    {label : "Songs", current : true}
];

export default () => (
    <MainScreenLayout>
        <Breadcrumbs items = { breadcrumbs } />
        <SongsList />
    </MainScreenLayout>
);