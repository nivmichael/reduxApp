"use strict"
import {createStore} from 'redux';

//Imports combined reducers
import reducers from './reducers/index';
// Step 1 create the store
const store = createStore(reducers);

store.subscribe(function() {
    console.log('current state is: ', store.getState());
})

// Step 2 create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: [
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
        }]
})

// Dispatch a second action
store.dispatch({
    type: "DELETE_BOOK",
    payload:{id: 1}
})

//Update
store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: 'michael book'
    }
})

//Add to cart
store.dispatch({
    type: "ADD_TO_CART",
    payload: { id: 2 }
})
