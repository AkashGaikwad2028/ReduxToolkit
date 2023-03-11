import { createSlice } from "@reduxjs/toolkit"


// const initialstate ={
//     value :0
// }

export const CounterSlice =createSlice({
    name:"counter",
    initialState :{
        value :0
    },
    reducers :{
        increament :(state)=>{
            console.log(state,"state")
            state.value +=1
        }
    }

})

export const {increament} = CounterSlice.actions

export default CounterSlice.reducer