import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/lib/jsonResponse'
import { ThunkConfig, RejectToAPIResponse } from '@/lib/redux'

export const submit = createAsyncThunk<APIResponse, void, ThunkConfig>('login/submit', async (_, { rejectWithValue, getState })  => {
    try {
        const url = `/api`
        const response = await axios.get(url);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(RejectToAPIResponse(error))
    }
})