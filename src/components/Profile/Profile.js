import React from 'react'
import classes from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from'./ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {
 
  if(!props.profile) {
    return <Preloader />
  }

      return(
          <div className={classes.content}>
          <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
          <MyPostsContainer />     
         
      </div>
    )
}

export default Profile;