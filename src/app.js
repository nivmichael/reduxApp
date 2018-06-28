"use strict"
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

//store.subscribe(function() {
//    console.log('current state is: ', store.getState());
//})

// Step 2 create and dispatch actions
store.dispatch(postBooks(
    [
        {
            id: 1,
            title: 'No. 1 book',
            description: 'This is the description of No.1',
            price: '99.99$'

        },
        {
            id: 2,
            title: 'No. 2 book',
            description: 'This is the desc of No.2',
            price: '500.99$'
        }
    ]
))
store.dispatch(deleteBooks(
    {id: 1}
))
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'michael book'
    }
))

//Add to cart
store.dispatch(addToCart([{id: 1}]))
