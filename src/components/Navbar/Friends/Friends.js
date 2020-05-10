import React from 'react';
import classes from './Friends.module.scss';
import {NavLink} from 'react-router-dom';
import friend from '../../../assets/images/friend.png'

const Friends = props => {
    let path = "/friends/" + props.id;
    return (
        <div className={classes.friend}>
            
        <NavLink to={path} className={classes.friendItem}>
            <img className={classes.icon} src={friend}/>
            <span>{props.name}</span>
        </NavLink>
    </div>
    )
}
export default Friends;