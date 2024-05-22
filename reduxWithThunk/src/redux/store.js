import {configureStore} from "@reduxjs/toolkit"
import fetchDataReducer from "./ApFetchiSlice"
import {thunk} from 'redux-thunk';

export const store =configureStore({
     reducer:{
       fetchData:fetchDataReducer,
     },
     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})