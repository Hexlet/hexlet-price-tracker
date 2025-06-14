import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    isLoggedIn: boolean;
    userInfo: null | { name: string; email: string };
}

const initialState: UserState = {
    isLoggedIn: false,
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ name: string; email: string }>) {
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
