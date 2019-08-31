import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import routes from '../config/routes';
import HomeScreen from '../main/screens/HomeScreen';

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
            <Route path = '/' component = { HomeScreen } />
            {routes.map((route, key) => (
                <Route 
                    key         = { key } 
                    path        = { route.path } 
                    component   = { route.component }
                    exact
                />
            ))}
        </Switch>
        { afterNavigation }
    </BrowserRouter>
);

export default Navigation;
