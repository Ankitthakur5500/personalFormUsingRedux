import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    fname: "",
    lname: "",
   }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        // submit:(state,action)=>{
        //     console.log("check=>",state,action)
        //     state.user=action.payload;
        //     state.ankit=action.payload;
        //     console.log("received",state.user);
        // },
        // delete(state,action){

        // }
        setFname:(state, {payload})=>{
            state.fname = payload
        },
        setLname:(state, {payload})=>{
            state.lname = payload
        }
    }
});

export const {setFname, setLname} = userSlice.actions;
export const getFname = (state) => state.user.fname
export const getLname = (state) => state.user.lname

export default userSlice.reducer;
