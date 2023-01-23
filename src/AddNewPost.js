import { useState } from "react"  //react hook used to manage the state of any component
import "./AddNewPost.css"
import  Navbar  from "./navbar"

export const AddNewPost = () => {
    const [Username, setUsername] = useState("")
    const [Address, setAddress] = useState("")
    const [imageFile, setimageFile] = useState('')
    const [Description, setDescription] = useState("")
    // const []
    let auth ;
    let Like = Math.floor(Math.random()*100)
    const uploadPost = () => {
        const formData = new FormData();
        formData.append("username", Username);
        formData.append("address", Address);
        formData.append("image_file", imageFile);
        formData.append("description", Description);
        formData.append("like",Like)

        fetch("https://instaclone1-wm3l.onrender.com/api",
            {
                method: 'POST',
                body: formData
            })


    }
   
    if(Username==="" ||Address==="" ||imageFile==="" ||Description === ""){
     auth = false}
    else{
         auth = true
    }

    
    return (
        <>
              <Navbar />
       
            <div id="Box">
              <div className="input">
              <input className="input"  type="file" accept="image/*"  aria-label="Upload File" aria-describedby="basic-addon1" onChange={(e) => { setimageFile(e.target.files[0]) }} />
              
               </div>
               <div>
               <input  placeholder="Author" className="input1" onChange={(e) => { setUsername(e.target.value) }} value={Username} />
                
              
               <input  placeholder="Location" onChange={(e) => { setAddress(e.target.value) }} value={Address} />
               
               </div>
               <div>
               <textarea id="textarea" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} value={Description}></textarea>
         
               </div>
         
             <div className="post">
             <button  id="button" disabled={auth ? false : true} onClick={uploadPost}>Post</button>
            
            </div>
            </div>
            
          
        </>
    )

}