import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn : false,
    token : null
}
const userSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {
        setToken(state,action){
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        removeToken(state){
            state.token = null;
            state.isLoggedIn = false;
        }
    }
});

const store = configureStore({
    reducer : userSlice.reducer
});

export const userActions = userSlice.actions;

export default store;