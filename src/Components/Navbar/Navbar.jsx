import "./navbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import{Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbarcontainer">
            <div className="navbarleft">
                <span class="logo">Mai_Tweet</span>
            </div>
            <div className="navbarcenter">
                <Search  className="searchicon" />
                <input type="text" className="searchinput" placeholder="Search for friend,post or video" />
            </div>
            <div className="navbarright">
                <div className="navbar-link">
                    <span className="navbar-link"><Link style={{textDecoration:"none",color:"white"}} to='/Profile'>Profile</Link></span>
                    <span className="navbar-link"><Link style={{textDecoration:"none",color:"white"}} to="/home">Home</Link></span>
                </div>
                <div className="navbar-icons">
                    <div className="navbariconitem">
                        <Person />
                        <span className="navbariconbadge">1</span>
                    </div>
                    <div className="navbariconitem">
                        <Chat/>
                        <span className="navbariconbadge">2</span>
                    </div>
                    <div className="navbariconitem">
                        <Notifications />
                        <span className="navbariconbadge">1</span>
                    </div>
                </div>
            <img src="./assets/person/1.jpeg" alt="img" className="navbarimg"/>
            </div>
        </div>
        
    )
}

