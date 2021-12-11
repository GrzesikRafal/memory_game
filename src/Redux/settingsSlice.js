import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    gameTheme: 'Numbers',
    gridSize: 4,
    arrayOfNumbers: []
}

export const gameSettingsSlice = createSlice({
    name: 'gameSettings',
    initialState,
    reducers: {
        setGameTheme: (state, action) => {
            state.gameTheme = action.payload
        },
        setGameGridSize: (state, action) => {
            state.gridSize = action.payload
        },
        setArrayOfNumbers: (state, action) => {
            state.arrayOfNumbers = action.payload
        },
        showSettings: (state) => {
            console.log(current(state))
        },
        setNewGame(state, action) {
            const arrayOfNumbers = []
            const amountOfElements = action.payload * action.payload
            const amountOfEqualElements = amountOfElements / 2
            for (let i = 0; i < amountOfEqualElements; i++) {
                arrayOfNumbers.push(i)
                arrayOfNumbers.push(i)
            }
            
    //function that randomize position of elements in array
            const getShuffledArr = arr => {
                const newArr = arr.slice()
                for (let i = newArr.length - 1; i > 0; i--) {
                    const rand = Math.floor(Math.random() * (i + 1));
                    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
                }
                return newArr
            };
            
            const shuffledArrayOfNumbers = getShuffledArr(arrayOfNumbers)
            state.arrayOfNumbers = shuffledArrayOfNumbers
        }

    }

})


export const { setGameTheme, setNewGame, setGameGridSize, setArrayOfNumbers, showSettings } = gameSettingsSlice.actions
export default gameSettingsSlice.reducer