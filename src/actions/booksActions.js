"use strict"

// Post a book
export function postBooks(book) {
    return {
        type: "POST_BOOK",
        payload: book
    }
}

// Delete a Book
export function deleteBooks(id) {
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

// Update a Book
export function updateBooks(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}