"use strict"
import {createStore} from 'redux';

// Step 3 define reducers
const reducer = function(state = {books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            let books = state.books.concat(action.payload);
            //return {books};
            return {books: [...state.books,...action.payload]}
        break;
    }
}
// Step 1 create the store
const store = createStore(reducer);

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
    type: "POST_BOOK",
    payload: [
        {
            id: 3,
            title: 'No. 3 book',
            description: 'This is the desc of No.3',
            price: '99.99$'

        }]
})