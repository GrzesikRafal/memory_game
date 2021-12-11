import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../axiosInstance'
import { current } from '@reduxjs/toolkit'
const initialState = {
    grid4Moves: [],
    grid4Time: [],
    grid6Moves: [],
    grid6Time: [],
  
}
export const fetchMovesScore = createAsyncThunk(
    'leadboardData/fetchMovesScore',
    async (fetchedGridSize) => {
        try {
            const response = await axiosInstance.get(`/${fetchedGridSize}/moves/.json`)
            // //if there is no data in database set value as empty array instead of undefined,otherwise it will throw an error
            response.data = response.data ? response.data : []
            const fetchedMoves = Object.values(response.data).sort((a, b) => a - b)
            const fetchedMovesWithoutDuplication = [... new Set(fetchedMoves)]
            return fetchedMovesWithoutDuplication
        }
        catch (err) { console.log(err.response) }
    }
)
export const fetchTimeScore = createAsyncThunk(
    'leadboardData/fetchTimeScore',
    async (fetchedGridSize) => {
        try {
            const response = await axiosInstance.get(`/${fetchedGridSize}/time/.json`)
            // //if there is no data in database set value as empty array instead of undefined,otherwise it will throw an error
            response.data = response.data ? response.data : []
            const fetchedTime = Object.values(response.data)
            const sortedFetchedTime = fetchedTime.sort((a, b) =>
                a.minutes - b.minutes || a.seconds - b.seconds
            )
            const fetchedTimeWithoutDuplication = Array.from(new Set(sortedFetchedTime.map(JSON.stringify))).map(JSON.parse)
            return fetchedTimeWithoutDuplication
        }
        catch {

        }
    }
)
export const leadboardData = createSlice({
    name: 'leadboardData',
    initialState,
    reducers: {
    
    },
    extraReducers: {
        [fetchMovesScore.fulfilled]: (state, action) => {
            const fetchedGridSize = action.meta.arg
            fetchedGridSize === 4 ?
                state.grid4Moves = action.payload :
                state.grid6Moves = action.payload
        },
        [fetchMovesScore.rejected]: (action) => { console.log(action.payload) },
        [fetchTimeScore.fulfilled]: (state, action) => {
            const fetchedGridSize = action.meta.arg
            fetchedGridSize === 4 ?
                state.grid4Time = action.payload :
                state.grid6Time = action.payload

        }
    }

})


export const { } = leadboardData.actions
export default leadboardData.reducer