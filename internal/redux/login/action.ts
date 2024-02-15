import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/lib/jsonResponse'
import { ThunkConfig, RejectToAPIResponse } from '@/lib/redux'

export const submit = createAsyncThunk<APIResponse, void, ThunkConfig>('login/submit', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const body = {
            username: state.login.Username,
            password: state.login.Password
        }
        const url = `/api/login`
        const response = await axios.post(url, body);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(RejectToAPIResponse(error))
    }
})