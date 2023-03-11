import React from 'react'
import {View,Text} from "react-native"
import Counter from './src/Counter'
import  store  from './src/store'
import { Provider } from 'react-redux'

export default function App() {
  console.log(store)
  return (
<Provider store={store}>
<Counter/>
</Provider> 
  )
}
