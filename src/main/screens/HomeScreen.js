import React from 'react';
import MainScreenLayout from './screen-layouts/MainScreenLayout';
import { ArtistsList } from '../components';
import Breadcrumbs from '../components/bread-crumbs';

const breadcrumbs = [
    {label : "Home", to : "/"},
    {label : "Artists", current : true},
];

export default () => (
    <MainScreenLayout>
        <Breadcrumbs items = { breadcrumbs } />
        <ArtistsList />
    </MainScreenLayout>
);