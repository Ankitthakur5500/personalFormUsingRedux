import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:[]
   }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setData:(state,{payload})=>{
            state.user.push(payload);
        },
        removeUser(state,action){
            state.user.splice(action.payload,1)
        }
    }
});

export const {setData,removeUser} = userSlice.actions;

export const getData = (state) => state.user



export default userSlice.reducer;
