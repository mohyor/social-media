import './Post.css'
import { MoreVert } from '@material-ui/icons'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Post({ post }) {
  /*
 console.log(post)
 const user = Users.filter(u => u.id === 1) // To find the username which has id number 1.
 console.log(user)
 console.log(user[0].username) // To find the username property of the first user.
 */

  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user:currentUser } = useContext(AuthContext)

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => { 
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`)
      setUser(res.data)
    }; 
    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    try {
      axios.put('/posts/' + post._id + '/like', {userId: currentUser._id})
    }
    catch(err) {}
    setLike(isLiked ? like-1 : like+1)
  }
  
  return (
    <div className="post">
     <div className="postWrapper">
      <div className="postTop">
       <div className="postTopLeft">
         <Link to={`profile/${user.username}`}>
            <img className="postProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
         </Link>
        <span className="postUsername">{user.username}</span>
        <span className="postDate">{format(post.createdAt)}</span>
       </div>
       <div className="postTopRight">
        <MoreVert />
       </div>
      </div>
      <div className="postCenter">
       <span className="postText">{post?.desc}</span> {/* ? - Some posts don't have a description.  */}
       <img className="postImg" src={PF+post.img} alt="" />
      </div>
      <div className="postBottom">
       <div className="postBottonLeft">
        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
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
