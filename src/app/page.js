"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Provider } from 'react-redux'
import store from './component/store/page'
import Form from './component/Form/page'


export default function Home() {
  return (
  <Provider store={store}>
  <Form/>
  </Provider>
  )
}
