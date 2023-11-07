import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from './slices/page'
import { setData } from './slices/page'
import { removeUser } from './slices/page'

export default function Display() {
    const ankit = useSelector(getData)
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
            Address:{data.Address}<br/>
            Mobile Number:{data.Mobile}<br/>
            Country:{data.Country}<br/>
            State:{data.State}<br/>
            Pincode:{data.Pincode}<br/>
            <button onClick={()=>deleteUser(id)}>Delete</button>
          </div>
       ))}
    </div>
  )
}
