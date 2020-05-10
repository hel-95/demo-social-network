import React from 'react';
import classes from './Header.module.scss';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={classes.header}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9d%2FSwift_logo.svg%2F853px-Swift_logo.svg.png&f=1&nofb=1"></img>
        <div className={classes.loginBlock}>
            { props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            :  <NavLink to={'/login'}>Login</NavLink> }
        </div>
        </header>
    )
}

export default Header;