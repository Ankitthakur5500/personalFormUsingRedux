import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../slices/page';

export const store = configureStore({
    reducer:{
     user:userSlice,
    }
});
export default store;