import './Profile.css'
import TopBar from '../../components/TopBar/TopBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'

export default function Profile() {
  return (
   <>
     <TopBar />
     <div className="profile">
       <SideBar />
       <div className="profileRight">
        <div className="profileRightTop">
         <div className="profileCover">
           <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
           <img className="profileUserImg" src="assets/post/7.jpeg" alt="" />
         </div>
         <div className="profileInfo">
          <h4 className="profileInfoName">baba</h4>
          <span className="profileInfoDesc">mama</span>
         </div>
        </div>
        <div className="profileRightBottom">
         <Feed />
         <RightBar profile />
        </div>
       </div>
     </div>
   </>
  );
}
