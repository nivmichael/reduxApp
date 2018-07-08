"use strict"
// react
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//Imports combined reducers
import reducers from './reducers/index';
// Import actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';
// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById('app')
);

// Step 2 create and dispatch actions
//store.dispatch(postBooks(
//
//))
//store.dispatch(deleteBooks(
//    {id: 1}
//))
//store.dispatch(updateBooks(
//    {
//        id: 2,
//        title: 'michael book'
//    }
//))
//
////Add to cart
//store.dispatch(addToCart([{id: 1}]))
