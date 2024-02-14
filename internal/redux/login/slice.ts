import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/internal/redux/store'
import { initialState } from './state'
import { submit } from './action'

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
    extraReducers: (builder) => {
        builder.addCase(submit.pending, (state, { payload }) => {
            state.LoadingLogin = true
        })
        builder.addCase(submit.fulfilled, (state, { payload }) => {
            
        })
    },
})

export const {
    Reset,
    SetUsername,
    SetPassword,
    SetLoadingLogin
} = slice.actions

export const LoginState = (state: RootState) => state.login
export default slice.reducer