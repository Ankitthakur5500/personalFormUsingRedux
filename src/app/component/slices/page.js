import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    fname: "",
    lname: "",
    add: "",
    mNo: "",
    Ctry: "",
    stat: "",
    pC: "",
   }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setFname:(state, {payload})=>{
            state.fname = payload
        },
        setLname:(state, {payload})=>{
            state.lname = payload
        },
        setAdds:(state, {payload})=>{
            state.add = payload
        },
        setMNo:(state, {payload})=>{
            state.mNo = payload
        },
        setCtry:(state, {payload})=>{
            state.Ctry = payload
        },
        setState:(state, {payload})=>{
            state.stat = payload
        },
        setPC:(state, {payload})=>{
            state.pC = payload
        }
    }
});

export const {setFname, setLname,setAdds,setMNo,setCtry,setState,setPC} = userSlice.actions;
export const getFname = (state) => state.user.fname
export const getLname = (state) => state.user.lname
export const getAdds = (state) => state.user.add
export const getMNo = (state) => state.user.mNo
export const getCtry = (state) => state.user.Ctry
export const getStat = (state) => state.user.stat
export const getPC = (state) => state.user.pC


export default userSlice.reducer;
