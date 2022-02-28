import './Post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({ post }) {
  /*
 console.log(post)
 const user = Users.filter(u => u.id === 1) // To find the username which has id number 1.
 console.log(user)
 console.log(user[0].username) // To find the username property of the first user.
 */
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
  }
  
  return (
    <div className="post">
     <div className="postWrapper">
      <div className="postTop">
       <div className="postTopLeft">
        <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
        <span className="postDate">{post.date}</span>
       </div>
       <div className="postTopRight">
        <MoreVert />
       </div>
      </div>
      <div className="postCenter">
       <span className="postText">{post?.desc}</span> {/* ? - Some posts don't have a description.  */}
       <img className="postImg" src={post.photo} alt="" />
      </div>
      <div className="postBottom">
       <div className="postBottonLeft">
        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
        {/*<span className="postLikeCounter">{post.like}</span>*/}
        <span className="postLikeCounter">{like}</span>
       </div>
       <div className="postBottonRight">
        <span className="postCommentText">{post.comment} comments</span>
       </div>
      </div>
     </div>
    </div>
  )
}
