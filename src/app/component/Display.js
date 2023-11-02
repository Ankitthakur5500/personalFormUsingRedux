import React from 'react'
import { useSelector } from 'react-redux'
import { getAdds, getFname,getLname,getMNo,getCtry,getStat,getPC} from './slices/page'

export default function Display() {
    const fname = useSelector(getFname)
    const lname = useSelector(getLname)
    const address = useSelector(getAdds)
    const mNo = useSelector(getMNo)
    const ctry = useSelector(getCtry)
    const stat = useSelector(getStat)
    const pc = useSelector(getPC)
    
  return (
    <div>
       First Name:{fname}<br/>Last Name:{lname}<br/>Address:{address}<br/>Mobile Number:{mNo}<br/>Country:{ctry}<br/>State:{stat}<br/>Pincode:{pc}
    </div>
  )
}
