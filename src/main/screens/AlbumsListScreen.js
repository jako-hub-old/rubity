import React from 'react';
import MainScreenLayout from './screen-layouts/MainScreenLayout';
import { AlbumList } from '../components';
import Breadcrumbs from '../components/bread-crumbs';

const breadcrumbs = [
    {label : "Home", to : "/"},
    {label : "Artists", to: "/", type : 'artist'},
    {label : "Albums", to: "/", current : true},
];

export default () => (
    <MainScreenLayout>
        <Breadcrumbs items = { breadcrumbs } />
        <AlbumList />
    </MainScreenLayout>
);