import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { Posts } from '../../dummyData'

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
         {/*In this code snippet, we import the json data from dummyData.js. After which the data is mapped to the Post tag, the "post" variable can now be passed as props in the Post.jsx file. */}
        {Posts.map((p) => (<Post key={p.id} post={p} />))}
      </div>
    </div>
  );
}
