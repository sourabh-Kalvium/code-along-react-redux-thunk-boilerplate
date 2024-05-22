import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setData,fetchUser} from "../redux/ApFetchiSlice"
import { useEffect } from 'react'



function ShowData() {
   const dispatch =useDispatch()
   const Apidata =useSelector((state)=>state.
   fetchData)
  

  return (
    <div>
         {console.log(Apidata)}
         <button onClick={()=>dispatch(fetchUser())}>Fetch user</button>
          {Apidata.loading &&<h4>Loading...</h4>}
          {Apidata.error &&<h4>{Apidata.error}</h4>}
          
         {Apidata && Apidata.data.map((user)=>(
             <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email:{user.email}</p>
             </div>
         ))}
    </div>
  )
}

export default ShowData