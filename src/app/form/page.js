import React from 'react'

export default function page() {
  return (
    <div className='mainform'>
    <h1>Please Fill The Below Form.</h1>
    <form className='hello'>
      <label className='label'>First Name:</label>
      <input className='input'placeholder='Ankit'></input>
      <label className='label'>Last Name:</label>
      <input className='input'placeholder='Thakur'></input>
      <label className='label'>Address:</label>
      <input className='input'placeholder='janta flats,Dilshad Garden'></input>
      <label className='label'>Mobile No.:</label>
      <input className='input'placeholder='9810654304'></input>
      <label className='label'>Country:</label>
      <select className='input'>
      <option value="0">Select car:</option>
      <option value="1">India</option>
      <option value="2">England</option>
      <option value="3">U.S.A</option>
      <option value="4">Canada</option>
      <option value="5">Bangladesh</option>
      </select>
      <label className='label'>State.:</label>
      <select className='input'>
      <option value="0">Select car:</option>
      <option value="1">Delhi</option>
      <option value="2">Maharastra</option>
      <option value="3">Kolkata</option>
      <option value="4">karnataka</option>
      <option value="5">Gujrat</option>
      </select>
      <label className='label'>PIN.:</label>
      <input className='input'placeholder='110093'></input>
      <br/>
      <button className='btn'>Submit</button>
    </form>
    </div>
  )
}
