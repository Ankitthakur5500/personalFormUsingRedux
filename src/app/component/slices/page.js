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
        // setFname:(state, {payload})=>{
        //     state.fname = payload
        // },
        // setLname:(state, {payload})=>{
        //     state.lname = payload
        // },
        // setAdds:(state, {payload})=>{
        //     state.add = payload
        // },
        // setMNo:(state, {payload})=>{
        //     state.mNo = payload
        // },
        // setCtry:(state, {payload})=>{
        //     state.Ctry = payload
        // },
        // setState:(state, {payload})=>{
        //     state.stat = payload
        // },
        // setPC:(state, {payload})=>{
        //     state.pC = payload
        // }
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
        }
    }
});

// export const {setFname, setLname,setAdds,setMNo,setCtry,setState,setPC,setData} = userSlice.actions;
export const {setData} = userSlice.actions;

// export const getFname = (state) => state.user.fname
// export const getLname = (state) => state.user.lname
// export const getAdds = (state) => state.user.add
// export const getMNo = (state) => state.user.mNo
// export const getCtry = (state) => state.user.Ctry
// export const getStat = (state) => state.user.stat
// export const getPC = (state) => state.user.pC

export const getData = (state) => state.user



export default userSlice.reducer;
