"use strict"

// Step 3 define reducers
export function booksReducers(state = {books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            let books = state.books.concat(action.payload);
            //return {books};
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