import React from 'react';
import classes from './ProfileInfo.module.scss';
import userPhoto from '../../../assets/images/samurai.png';
import ProfileStatus from './ProfileStatus'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, updateStatus, status, ...props}) => {
  if(!profile) {
    return <Preloader />
  }
    return (
        <div className={classes.profile}>
          <div>
          <img className={classes.icon} src={profile.photos.large != null 
          ? profile.photos.large : userPhoto} />
          </div>
          
          <div className={classes.container}>
          <span className={classes.fullName}>{profile.fullName}</span>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          <p>{profile.aboutMe}</p>
          
          <div className={classes.job}>
              <span>{profile.lookingForAJob}</span>
              <span>{profile.lookingForAJobDescription}</span>
          </div>
          <div className={classes.social}>
            {profile.contacts.facebook && <a href={profile.contacts.facebook}><i class="fab fa-facebook-square"></i></a>}
            {profile.contacts.github && <a href={profile.contacts.github}><i class="fab fa-github-square"></i></a>}
            {profile.contacts.instagram && <a href={profile.contacts.instagram}><i class="fab fa-instagram-square"></i></a>}
            {profile.contacts.twitter && <a href={profile.contacts.twitter}><i class="fab fa-twitter-square"></i></a>}
            {profile.contacts.vk && <a href={profile.contacts.vk}><i class="fab fa-vk"></i></a>}
            
            {profile.contacts.youtube && <a href={profile.contacts.youtube}><i class="fab fa-youtube"></i></a>}
            {profile.contacts.mainLink && <a href={profile.contacts.mainLink}><i class="fas fa-mouse-pointer"></i></a>}
            {profile.contacts.website && <a href={profile.contacts.website}><i class="fab fa-blogger"></i></a>}
          </div>
          </div>
          
        </div>
    )
}

export default ProfileInfo;