import './Profile.css'
import TopBar from '../../components/TopBar/TopBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function Profile() {
  const  PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const username = useParams().username

  useEffect(() => { 
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }; 
    fetchUser()
  }, [username])

  return (
   <>
     <TopBar />
     <div className="profile">
       <SideBar />
       <div className="profileRight">
        <div className="profileRightTop">
         <div className="profileCover">
           <img className="profileCoverImg" src={user.coverPicture ? PF + user.coverPicture : PF + "person/noAvatar.png"} alt="" />
           <img className="profileUserImg" src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png' } alt="" />
         </div>
         <div className="profileInfo">
          <h4 className="profileInfoName">{user.username}</h4>
          <span className="profileInfoDesc">{user.desc}</span>
         </div>
        </div>
        <div className="profileRightBottom">
         <Feed username={username} />
         <RightBar user={user} />
        </div>
       </div>
     </div>
   </>
  );
}
