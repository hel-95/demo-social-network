import React from 'react'
import classes from './Users.module.scss'
import userPhoto from '../../assets/images/samurai.png';
import {NavLink} from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';



const User = ({user, followingInProcess, unfollow, follow}) => {
 
   return  (
    <div className={classes.user}>
                
                    
                        <NavLink to={'/profile/' + user.id} className={classes.size}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} 
                        className={classes.photo}/>
                        </NavLink>
                                     
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                                      
                        <div><i className="fas fa-globe"></i>{'u.location.country'}, {'u.location.city'}</div>
                        

                        <div className={classes.buttonContainer}>
            { user.followed 
            ?  <button disabled={followingInProcess.some(id => id === user.id)} 
            onClick={() => {unfollow(user.id);
              }}>Follow</button> 

            :  <button disabled={followingInProcess.some(id => id === user.id)} 
            onClick={() => {follow(user.id);
              }}>Unfollow</button> }
                    </div>
                    
                
            </div>
            
    )
  }


export default User;