import {
    applyMiddleware, compose, createStore,
} from 'redux';
import getReducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export default (() => createStore(getReducers(), enhancer))();