import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: "0",
   }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.user=action.payload;
            console.log("received",state.user);
        },
        // delete(state,action){

        // }
    }
});

export const {submit} = userSlice.actions;
export default userSlice.reducer;