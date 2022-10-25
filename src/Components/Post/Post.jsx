import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { post } from "../../dummy"
import Like from "./Like"

export default function Post() {
    return (
        <>

            <div className="post">
                
          {post.map((value, key) => 
            <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={value.profileimage} alt="" />
                            <span className="postUsername">{value.name}</span>
                            <span className="postDate">{value.time}</span>
                            <MoreVert className="icon"/>
                            <div>
                            <span className="postText">{value.caption}</span>
                            </div>
                            
                            <img className="postImg" src={value.img} alt="" />
                        </div>
                       
                         <div className="postCenter">
                         </div>
                        <div className="postBottom">
                            <div className="postBottomLeft">
                                
                               <Like count={value.count}/>
                                <span className="postCommentText">{value.comments}</span>
                            </div>
                            <div className="postBottomRight">
                                
                            </div>

                        </div> 
                    </div>
            </div>
               
          )}
            </div>
          
        </>
    )
}
