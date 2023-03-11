import React, { useEffect } from 'react'
import {View,Text,Button, TouchableOpacity} from "react-native"
import {useSelector,useDispatch} from "react-redux"
import { increament } from './ReduxToolkit/CounterSlice'

export default function Counter() {
    const dispatch = useDispatch()
    const count =useSelector((state)=>state.counter.value)
    console.log(count)
    
    
// useEffect(()=>{
//     increament()
// },[count])

const increamentCounter=()=>{
    console.log("increament",increament)
    dispatch(increament())
}

  return (
    <View>
        <Text style={{textAlign:"center",marginTop:50,fontSize:25,marginBottom:20}} >{count}</Text>
       <TouchableOpacity style={{backgroundColor:"red",padding:10,marginHorizontal:50}} onPress={increamentCounter}><Text style={{textAlign:"center",color:"white",fontSize:20}}>Increament</Text></TouchableOpacity>
    </View>
  )
}
