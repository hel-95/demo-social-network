import React from 'react'
import classes from './DialogItem.module.scss'
import {NavLink} from 'react-router-dom'

const DialogItem = props => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            
            <NavLink to={path} >
                <img src={props.image}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default DialogItem;