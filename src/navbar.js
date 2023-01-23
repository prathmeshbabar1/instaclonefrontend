import "./navbar.css"

import { Link } from "react-router-dom"
 const  Navbar = ()=>{

    return(<>
      
<div className="container">

<span className="logo2">
<span className="logo1"></span>
</span>



<Link to="/"><nav className="headerName">Instaclone</nav> </Link>

<Link to="/view">  <span className="camera1"></span> </Link>

</div>
</>
        
    )
}
export default Navbar;