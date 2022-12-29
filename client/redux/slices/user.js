import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    success: false,
    error: false,
    userInfo: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state) => {
            state.loading = true;
        },
        getUserSuccess: (state, { payload }) => {
            state.userInfo = payload;
            state.success = true;
        },
        getUserFailure: (state) => {
            state.error = true;
        },
        logoutUser: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.userInfo = {};
        },
    },
});

export const { getUser, getUserSuccess, getUserFailure, logoutUser } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;

export function login({ email, password }) {
    return async (dispatch) => {
        dispatch(getUser());

        try {
            const res = await axios.post("http://localhost:4000/user/login", { email, password });
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatch(getUserSuccess(res.data));
        } catch (error) {
            console.log(error);
            dispatch(getUserFailure());
        }
    };
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem("user");
        dispatch(logoutUser());
    };
}
