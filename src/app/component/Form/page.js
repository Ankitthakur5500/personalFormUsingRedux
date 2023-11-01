"use client";
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submit } from '../slices/page';
import Link from 'next/link';

export default function page() {
  const dispatch = useDispatch();
  const [firstName,setFisrstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [address,setAddress] = useState("");
  const [mobileNumber,setMobileNumber] = useState("");
  const [country,setCountry] = useState("");
  const [stat,setStat] = useState("");
  const [pin,setPin] = useState("");

  // const data = [firstName,lastName,address,mobileNumber,country,stat,pin];
  // console.log("Arraydata",data);
  // console.log("Bdata",data.firstName);
  

  const formSubmitted=(event)=>{
    alert("Form Submitted Successfully!!!");
    event.preventDefault();
    console.log("dispatch",firstName);
    dispatch(submit(firstName));
  } 
  return (
    <div className='mainform'>
    <h1>Please Fill The Below Form.</h1>
    <form className='hello'>
      <label className='label'>First Name:</label>
      <input className='input' name = 'firstName' value={firstName} onChange={(event)=>setFisrstName(event.target.value)}></input>
      <label className='label'>Last Name:</label>
      <input className='input'name = 'lastName' value={lastName} onChange={(event)=>setLastName(event.target.value)}></input>
      <label className='label'>Address:</label>
      <input className='input'name = 'address' value={address} onChange={(event)=>setAddress(event.target.value)}></input>
      <label className='label'>Mobile No.:</label>
      <input className='input'name = 'mobileNumber'value={mobileNumber} onChange={(event)=>setMobileNumber(event.target.value)}></input>
      <label className='label'>Country:</label>
      <input className='input'name = 'country'value={country} onChange={(event)=>setCountry(event.target.value)}></input>
      <label className='label'>State.:</label>
      <input className='input'name = 'stat'value={stat} onChange={(event)=>setStat(event.target.value)}></input>
      <label className='label'>Pin.:</label>
      <input className='input' name='pin' value={pin} onChange={(event)=>setPin(event.target.value)}></input>
      <br/>
      <button onClick={formSubmitted} className='btn'>Submit</button>
    </form>
    <Link href="/component/nextPage">Display Database</Link>
    </div>
  )
}