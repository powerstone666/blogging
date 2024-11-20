import { useState } from "react"
import NavLogin from "./navLogin"

function Login()
{
    const [user,setUser]=useState({
         email:"",
        password:""
    })
    const {email,password}=user;
    const handle=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    return(
        <>
        <div className="h-screen flex flex-col text-center ">
              <NavLogin/>
              <div className="h-full flex justify-center align-middle mt-12">
              <div className="h-1/2 w-1/2 bg-gray-100 p-4">
                     <form className="text-center">
                        <h1 className="text-2xl font-bold">Login</h1>
                        <br/>
                        <h1 className="text-xl font-bold m-4">Email:</h1>
                        <input type="email" required placeholder="email" className="p-2 w-72" onChange={(e)=>handle(e)}/>
                        <h1 className="text-xl font-bold m-4">Password</h1>
                        <input type="password" placeholder="passowrd" className="p-2 w-72" required onChange={(e)=>handle(e)}/>
                        <br/>
                        <button className="bg-black text-white m-4 h-10 w-24">Login</button>
                        <br/>
                        <h1>Not a member? signup</h1>
                     </form>
              </div>
              </div>
        </div>
        </>
    )
}
export default Login