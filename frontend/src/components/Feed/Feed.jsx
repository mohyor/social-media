import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([])
  const [text, setText] = useState("")

  const { user } = useContext(AuthContext)

  useEffect(() => { 
    const fetchPosts = async ({ username }) => {
      const res = username ? await axios.get('/posts/profile/' + username) : await axios.get("posts/timeline/" + user._id)
      setPosts(res.data)
    } 
    fetchPosts()
  }, [username, user._id])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
         {/*In this code snippet, we import the json data from dummyData.js. After which the data is mapped to the Post tag, the "post" variable can now be passed as props in the Post.jsx file. */}
         {posts.map((p) => (<Post key={p._id} post={p} />))}
      </div>
    </div>
  );
}
