import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState ={
    data:[],
    loading:false,
    error:null
}

export const fetchDataSlice =createSlice({
    name:"ApiFetch",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
            state.loading=false
        },
        addUser:(state,action)=>{
            state.data.push(action.payload)
            state.loading=false
        },
        setLoading:(state)=>{
            state.loading=true
        },
        setError:(state,action)=>{
            state.error =action.payload
            state.loading =false
        }
    }
})

export const fetchUser=()=>async dispatch =>{
     dispatch(setLoading())
     try {
         await axios.get("https://jsonplaceholder.typicode.com/users")
         .then(res=>dispatch(setData(res.data)))
         
     } catch (error) {
        dispatch(setError(error.message))
     }
}

export const {setData,setLoading,setError,addUser} =fetchDataSlice.actions

export default fetchDataSlice.reducer
