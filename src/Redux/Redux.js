import { configureStore } from '@reduxjs/toolkit'
import gameSettingsReducer from './settingsSlice'
import userGuessesReducer from './gameSlice'
import leadboardDataReducer from './leadboardDataSlice'

export const store = configureStore({
    reducer: {
        gameSettings: gameSettingsReducer,
        userGuesses: userGuessesReducer,
        leadboardData:leadboardDataReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
})