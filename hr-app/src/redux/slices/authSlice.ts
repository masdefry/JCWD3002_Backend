import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: {
        username: '', 
        token: ''
    }
}

export const authSlice = createSlice({
    name: 'auth', 
    initialState, 
    reducers: {
        setAuth: (initialState, action) => {
            initialState.auth.username = action.payload.username
            initialState.auth.token = action.payload.token
        }
    }
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer