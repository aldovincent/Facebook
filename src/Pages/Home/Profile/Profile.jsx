import "./profile.css"
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Feed from "../../../Components/Feed/Feed";
import Rightbar from "../../../Components/Rightbar/Rightbar";


export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="./assets/post/3.jpeg" alt="" />
                            <img className="profileUserImg" src="./assets/person/7.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Aldo Vincent</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                            
                            <div className="profileRightBottom">
                                <Feed />
                                <Rightbar />
                            </div>
                </div>

            </div>
        </>
    )
}
