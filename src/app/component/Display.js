import React from 'react'
import { useSelector } from 'react-redux'

export default function Display() {
    const abc = useSelector((state)=>state.user)
    console.log(abc)
  return (
    <div>
       <span>{abc.user}</span>
    </div>
  )
}
