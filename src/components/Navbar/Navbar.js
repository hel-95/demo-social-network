import React from 'react'
import classes from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends'
import NavbarContainer from './NavbarContainer'

const Navbar = props => {
  
  let friendsElement = props.friends.map((friend, index) => {
    return (
      <Friends
       key={index}
       id={friend.id}
       image={friend.image}
       name={friend.name}
       />
    )
  });
  

    return(
        <nav> 
          <div className={classes.nav}>
            <NavLink className={classes.item} activeClassName={classes.active} to='/profile'><i className="fas fa-user"></i>Profile</NavLink>
            <NavLink className={classes.item} activeClassName={classes.active} to='/dialogs'><i className="fas fa-comments"></i>Messages</NavLink>
            <NavLink className={classes.item} activeClassName={classes.active} to='/users'><i className="fas fa-user-friends"></i>Users</NavLink>
            <NavLink className={classes.item} activeClassName={classes.active} to='/news'><i className="fas fa-rss"></i>News</NavLink>
            <NavLink className={classes.item} activeClassName={classes.active} to='/musics'><i className="fas fa-music"></i>Music</NavLink>
            <NavLink className={classes.item} activeClassName={classes.active} to='/settings'><i className="fas fa-cog"></i>Settings</NavLink>
           <div className={classes.friendBlock}>
           <h1 className={classes.header}>Friends</h1>
            <div className={classes.friendsList}>
              { friendsElement }
            </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;