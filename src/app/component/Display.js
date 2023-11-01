import React from 'react'
import { useSelector } from 'react-redux'
import { getFname,getLname } from './slices/page'

export default function Display() {
    const abc = useSelector(getFname)
    const bc = useSelector(getLname)
    console.log(abc,bc)
  return (
    <div>
       <span>{abc}</span>
       <span>{bc}</span>
       {/* <span>{bc.ankit}</span> */}
    </div>
  )
}
