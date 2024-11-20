import NavLogin from "./navLogin"

function Signup()
{
    return(
        <>
        <div className="h-screen flex flex-col text-center ">
              <NavLogin/>
              <div className="h-full flex justify-center align-middle mt-12">
              <div className="h-auto w-1/2 bg-gray-100 p-4">
                     <form className="text-center">
                        <h1 className="text-2xl font-bold">Register</h1>
                        <br/>
                        <h1 className="text-xl font-bold m-4">Name:</h1>
                        <input type="text" required placeholder="Name" className="p-2 w-72"/>
                        <h1 className="text-xl font-bold m-4">Email:</h1>
                        <input type="email" required placeholder="email" className="p-2 w-72"/>
                        <h1 className="text-xl font-bold m-4">Password</h1>
                        <input type="password" placeholder="passowrd" className="p-2 w-72" required/>
                        <br/>
                        <button className="bg-black text-white m-4 h-10 w-24">Login</button>
                        <br/>
                        <h1>Already a member? signin</h1>
                     </form>
              </div>
              </div>
        </div>
        </>
    )
}
export default Signup