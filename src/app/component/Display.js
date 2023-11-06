import React from 'react'
import { useSelector } from 'react-redux'
//import { getAdds, getFname,getLname,getMNo,getCtry,getStat,getPC,getData} from './slices/page'
import { getData } from './slices/page'
import { setData } from './slices/page'

export default function Display() {
    // const fname = useSelector(getFname)
    // const lname = useSelector(getLname)
    // const address = useSelector(getAdds)
    // const mNo = useSelector(getMNo)
    // const ctry = useSelector(getCtry)
    // const stat = useSelector(getStat)
    // const pc = useSelector(getPC)
    const ankit = useSelector(getData)
    console.log("**",ankit)

    //let ankit={firstName:fname,lastName:lname,Address:address,Mobile:mNo,Country:ctry,State:stat,Pincode:pc};
    // console.log(ankit.Address)
   // let ankit2 = [];
   // ankit2.push(ankit);
    //  console.log("running");
    //  const an = [];
    //  console.log(an);
    //  an.push(ankit); 
    //  console.log(an);
  
    
  return (
    <div className='trial'>
       {ankit.user.map((data)=>(
          <div key={data.fname}>
            First Name:{data.fname}<br/>
            Last Name:{data.lname}<br/>
            Address:{data.add}<br/>
            Mobile Number:{data.mNo}<br/>
            Country:{data.Ctry}<br/>
            State:{data.stat}<br/>
            Pincode:{data.pC}<br/>
          </div>
       ))}
    </div>
  )
}
