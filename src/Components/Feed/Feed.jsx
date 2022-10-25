import "./feed.css"
import Share from "../../Components/Share/Share"
import Post from "../../Components/Post/Post"
export default function Feed() {
  return (
    <>
    
    <div className="feedwrapper">
      <Share/>
      <Post/> 
    </div>
    </>
  )
}
