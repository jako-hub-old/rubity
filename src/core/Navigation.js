import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import routes from '../config/routes';
import HomeScreen from '../main/screens/HomeScreen';
import NotFound from '../main/screens/NotFound';

/**
 * This compoent allows to render the application navigation. it also allows you
 * to inyect any component or element before and after the navigation switch
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param {*} param0 
 */
const Navigation = ({beforeNavigation, afterNavigation}) => (
    <BrowserRouter>
        { beforeNavigation }
        <Switch>
            <Route path = '/' component = { HomeScreen } exact />
            {routes.map((route, key) => (
                <Route 
                    key         = { key } 
                    path        = { route.path } 
                    component   = { route.component }
                    exact
                />
            ))}
            <Route component = { NotFound } />
        </Switch>
        { afterNavigation }
    </BrowserRouter>
);

Navigation.propTypes = {
    beforeNavigation    : PropTypes.any,
    afterNavigation     : PropTypes.any,
};

export default Navigation;
