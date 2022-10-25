import { useState } from 'react'

export default function Like({count}) { 
    const[like,setlike]=useState(count)
    const [isLiked,setIsliked]=useState(true)
    
    const likeHandler =()=>{
        setlike(isLiked ? like-1 :like+1)
        setIsliked(!isLiked)                                                                      
    }
    console.log(isLiked);
  return (
    <>
    <img className="likeIcon" src="./assets/like.png" alt="" onClick={likeHandler} />
    
    
     <img className="likeIcon" src="./assets/heart.png" alt=""  />
     <span className="postLikeCounter">{like} people liked it</span>
    </>
  )
}
