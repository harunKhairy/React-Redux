import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import async from './middlewares/async'
import stateValidator from './middlewares/stateValidator'
// import reduxPromise from 'redux-promise';

export default ({ children, initialState = {} }) => {

    const reduxStore = createStore (
        reducers,
        initialState,
        // applyMiddleware(reduxPromise, logger),
        applyMiddleware(async, stateValidator, logger),
    );

    return (
        <Provider store={reduxStore}>
            {children}
        </Provider>
    )
}