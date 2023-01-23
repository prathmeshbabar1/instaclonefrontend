import "./home.css"
import { Link } from "react-router-dom"
export const Home =()=>{


    return(
        <div>
         <img className="homeimg" src="../public/lens-1418954@2x.png"/>
         <h5 className="main" >10x Team 04</h5>
         <Link to="/post"><button className="button1" >Enter</button></Link>  
        </div>
    )
}


