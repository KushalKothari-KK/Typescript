// Future value of useState

import { useState } from "react";

type Authuser = {
    name:string
    email:string
}

export const User = () => {
    //informing typescript user can be null or Authuser
    //cannot assign simply assing null then Authuser

    // if initial null
    // const [user,setUser]= useState<Authuser | null>(null)

    // useState Type Assertion
    const [user,setUser]= useState<Authuser>({} as Authuser)


    const handleLogin = () =>{
        setUser({
            name:'kushal',
            email:'kushal@example.com'
        })
    }
    // const handleLogout = () =>{
    //     setUser(null)
    // }

    

  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    {/* <button onClick={handleLogout}>Logout</button> */}

    {/* showing optional chaning user?.name as we define null or Authuser */}
    {/* for initial null then Authuser */}
    {/* <div>User name is {user?.name}</div>
    <div>User email is {user?.email}</div> */}
    
    {/* for Authuser as type assertion */}
    <div>User name is {user.name}</div>
    <div>User email is {user.email}</div>
    </div>
  )
}
