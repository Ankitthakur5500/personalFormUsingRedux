import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from './slices/page'
import { setData } from './slices/page'
import { removeUser } from './slices/page'

export default function Display() {
    const ankit = useSelector(getData)
    console.log("**",ankit)
    const dispatch = useDispatch();
  
    const deleteUser = (id)=>{
        dispatch(removeUser(id))
    }
  return (
    <div>
       {ankit.user.map((data,id)=>(
          <div  className="note" key={id}>
            First Name:{data.fname}<br/>
            Last Name:{data.lname}<br/> 
            Address:{data.add}<br/>
            Mobile Number:{data.mNo}<br/>
            Country:{data.Ctry}<br/>
            State:{data.stat}<br/>
            Pincode:{data.pC}<br/>
            <button onClick={()=>deleteUser(id)}>Delete</button>
          </div>
       ))}
    </div>
  )
}
