import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/internal/redux/store'
import { initialState } from './state'
import eventReducers from './events'

const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetUsername: (state, action: PayloadAction<string>) => {
            state.Username = action.payload
        },
        SetPassword: (state, action: PayloadAction<string>) => {
            state.Password = action.payload
        },
        SetLoadingLogin: (state, action: PayloadAction<boolean>) => {
            state.LoadingLogin = action.payload
        },
    },
    extraReducers: eventReducers,
})

export const {
    Reset,
    SetUsername,
    SetPassword,
    SetLoadingLogin
} = slice.actions

export const LoginState = (state: RootState) => state.login
export default slice.reducer