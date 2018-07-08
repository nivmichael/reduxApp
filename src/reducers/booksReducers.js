"use strict"

// Step 3 define reducers
export function booksReducers(state = {
    books:
        [
            {
                id: 1,
                title: 'No. 1 book',
                description: 'This is the description of No.1',
                price: '44.99'

            },
            {
                id: 2,
                title: 'No. 2 book',
                description: 'This is the desc of No.2',
                price: '69.99'
            }
        ]
    }, action) {
    switch (action.type) {
        case "GET_BOOKS":

            return {...state, books:[...state.books]}
            break;
        case "POST_BOOK":
            let books = state.books.concat(action.payload);
            return {books: [...state.books,...action.payload]}
            break;
        case 'DELETE_BOOK':
            // Copy of the array of books
            const currentBookToDelete = [...state.books];
            //Get the index to delete
            const indexToDelete = currentBookToDelete.findIndex(
                function(book) {
                    return book.id === action.payload.id;
                }
            )
            // use slice to remove the book at the index
            return {books: [...currentBookToDelete.slice(0, indexToDelete),...currentBookToDelete.slice(indexToDelete + 1)]}
            break;
        case 'UPDATE_BOOK':
            // Copy of the array of books
            const currentBookToUpdate = [...state.books];

            const indexToUpdate = currentBookToUpdate.findIndex(
                function(book) {
                    return book.id == action.payload.id;
                }
            )
            // Create a new book object using the index, and putting the new title
            const newBookToUpdate = {
                    ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }

            // use slice to remove the book at the index, replace with the new object and concatinate all of them together
            return {books: [...currentBookToUpdate.slice(0, indexToUpdate),newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state;
}