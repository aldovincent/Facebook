import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import  Feed  from "../../Components/Feed/Feed";
import  Rightbar from "../../Components/Rightbar/Rightbar";
import "./home.css";

export default function Home() {
  return (
    <>
       <Navbar/>
      <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}
