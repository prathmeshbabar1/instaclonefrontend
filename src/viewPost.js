import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./navbar"
import "./viewpost.css"
export const ViewPosts=()=> {
    const [ serverResponse,setServerResponse] = useState(null);

const fetchAllData = async()=>{

    const resp = await fetch("https://instaclone1-wm3l.onrender.com/api/all")
setServerResponse(await resp.json())
    
}
useEffect(()=>{
    fetchAllData()
},[]);

if(serverResponse===null){
    return (<div>loading....</div>) 
}
return (
    <div>
        <div>    <Navbar/></div>
    <div >
    <Link to="/view" > <span className="addpost">+AddPost </span></Link>
        </div>
       
        {
           serverResponse?.result?.map?.((post, index) => {
            console.log(post);
            return <div className="page" key={index}><ul className="ul">
                <li className="li" id="name">{post.username}</li>
                <li  className="li" id="location">{post.address}</li>
                <li  className="li"><div>{ <img  className="img" src={`https://instaclone1-wm3l.onrender.com/images/${post.image_file}`} key={index}alt="images"/>
          }</div></li>
          <li><span className="heart"></span><span className="share"></span></li>
          <li className="like">{`${post.like} `}likes</li>
                <li  className="li" id="description">{post.description}</li>
                </ul>
             </div> })
        }
    </div>
)
       
           //serverResponse?.result?.map?.((post, index) => {
    
        
  
}