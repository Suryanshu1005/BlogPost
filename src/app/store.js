import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../features/post/postsSlice"
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        posts: postsReducers,
    },
    middleware: [thunk],
})