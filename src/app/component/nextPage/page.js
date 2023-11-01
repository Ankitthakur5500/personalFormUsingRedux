"use client"
import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../store/page'
import Display from '../Display'

export default function page() {
  return (
    <Provider store={store}>
      <Display/>
    </Provider>
  )
}
