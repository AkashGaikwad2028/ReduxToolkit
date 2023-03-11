import { configureStore } from "@reduxjs/toolkit";
import Countreducer from "./ReduxToolkit/CounterSlice";

 const store = configureStore({
    reducer: {
        counter:Countreducer
    },
  })

  export  default store
