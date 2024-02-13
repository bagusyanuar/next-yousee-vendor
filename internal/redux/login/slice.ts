import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/internal/redux/store'

type loginState = {
    Username: string
    Password: string
}

const initialState: loginState = {
    Username: '',
    Password: ''
}

const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        reset: () => initialState,
        setUsername: (state, action: PayloadAction<string>) => {
            state.Username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.Password = action.payload
        },
    }
})

export const {
    reset,
    setUsername,
    setPassword
} = slice.actions

export const loginState = (state: RootState) => state.login
export default slice.reducer