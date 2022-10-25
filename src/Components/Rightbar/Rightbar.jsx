import { chat } from "../../dummy"
import "./rightbar.css"

export default function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className=" birthdayImg" src="./assets/gift.png" alt="" />
            <span className="birthdaytext">
              <b>Pola Foster</b>and <b> 3 other friends</b>have a birthday today
            </span>
          </div>
          <img className="rightbarAd" src="./assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {chat.map((value, key) => 
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src={value.img} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{value.name}</span>
              </li>
            )}


          </ul>



        </div>
      </div>
    </>
  )
}
