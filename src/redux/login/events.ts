import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { TState } from './state'
import { submit } from './action'


const onSubmitBuilder = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(submit.pending, (state, { payload }) => {
        state.LoadingLogin = true
        console.log('pending')
    }).addCase(submit.fulfilled, (state, { payload }) => {
        state.LoadingLogin = false
        console.log(payload)
    }).addCase(submit.rejected, (state, { payload }) => {
        state.LoadingLogin = false
        console.log('failed')
    })
}

const extraReducers = (builder: ActionReducerMapBuilder<TState>) => {
    onSubmitBuilder(builder);
}

export default extraReducers