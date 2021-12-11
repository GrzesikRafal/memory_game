import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrayOfGuesses: [],
    successGuesses: []
}

export const userGuesses = createSlice({
    name: 'userGuesses',
    initialState,
    reducers: {
        addElementToGuesses: (state, action) => {
            state.arrayOfGuesses.push(action.payload)
        },
        clearArrayOfGuesses(state) {
            state.arrayOfGuesses = []
        },
        addToSuccessGuesses(state, action) {
            state.successGuesses.push(action.payload)
        },
        prepareNewGame(state) {
            state.successGuesses = []
            state.arrayOfGuesses = []
        },


    }

})


export const { addElementToGuesses, clearArrayOfGuesses, addToSuccessGuesses, prepareNewGame } = userGuesses.actions
export default userGuesses.reducer