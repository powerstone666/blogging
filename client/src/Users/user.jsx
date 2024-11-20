import { useState } from "react"
import NavLogin from "../Login/navLogin"
/*const blog=[
    {
        name:"abccc",
        blog:"sdgysgd7 ay7ya7y 7Y("
    },
    {
        name:"abccc",
        blog:"sdgysgd7 ay7ya7y 7Y("
    },
    {
        name:"abccc",
        blog:"sdgysgd7 ay7ya7y 7Y("
    },
    {
        name:"abccc",
        blog:"sdgysgd7 ay7ya7y 7Y("
    },
    {
        name:"abccc",
        blog:"sdgysgd7 ay7ya7y 7Y("
    }
]*/
function User()
{
    const [post,setPost]=useState('posts')
    const [data,setData]=useState({
        title:"",
        blog:""
    })
    const {title,blog}=data;
    const handleChange=(e)=>{
        setData({...data,[e.target.title]:[e.target.blog]})
    }
  console.log(blog)
     localStorage.setItem('blogs',blog)
    
     const submitData=()=>{

     }
    return(
<>
      <NavLogin/>
      <div className="flex flex-col text-center justify-center">
        <div className="flex text-center justify-center gap-4">
               <button onClick={()=>{
                setPost('posts')
               }}>
              <h1 className="text-xl font-bold"> Posts</h1>
               </button>
               <button onClick={()=>{
                setPost('profile')
               }}>
                <h1 className="text-xl font-bold">profile</h1>
               </button>
        </div>
        <div>
              {
                post==='posts'?(
                       <>
                       <div className="flex flex-col justify-center w-full h-screen text-center">
                        {     
                          blog?.map((b,index)=>(
                            
                            <div className=" text-center justify-center bg-gray-50 w-1/2 h-1/2" key={index}>
                                           <h1>{b.name}</h1>
                                           <h1>{b.blog}</h1>
                            </div>

                          ))
}
                       </div>
                       </>
                ):(
                        <>
                        <div>
                       
                                <h1 >title</h1>
                                <input type="text" value={title} onChange={(e)=>{handleChange(e)}}/>
                                <h1>Blog</h1>
                                <textarea type="text"  rows='3' cols='4' placeholder="blog" className="w-96 h-96" value={blog2} onChange={(e)=>{handleChange}}/>
                                <button onClick={submitdata}>Add</button>
                          
                        </div>
                        </>
                )
              }
        </div>
      </div>
</>
    )
}
export default User