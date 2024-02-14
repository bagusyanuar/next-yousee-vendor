export type TState = {
    Username: string
    Password: string
    LoadingLogin: boolean
}

export const initialState: TState = {
    Username: '',
    Password: '',
    LoadingLogin: false
}
