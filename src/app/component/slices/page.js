import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  user:[{fname: "",
    lname: "",
    add: "",
    mNo: "",
    Ctry: "",
    stat: "",
    pC: ""},]
   }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setData:(state,{payload})=>{
            const abc = {
            fname : payload.fname,
            lname : payload.lname,
            add : payload.Address,
            Ctry : payload.Country,
            stat : payload.State,
            pC : payload.Pincode,
            mNo : payload.Mobile,
            }
            state.user.push(abc);
            console.log("==>>",abc);
        },
        removeUser(state,action){
            state.user.splice(action.payload,1)
        }
    }
});

export const {setData,removeUser} = userSlice.actions;

export const getData = (state) => state.user



export default userSlice.reducer;
