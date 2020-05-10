import React from 'react'
import classes from './Post.module.scss'

const Post = props => {
    return (
        <div className={classes.item}>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg-aws.ehowcdn.com%2F200x200%2Fcme%2Fcme_public_images%2Fwww_ehow_com%2Fi.ehow.com%2Fimages%2Fa07%2F0i%2Ffm%2Fcare-yellow_headed-amazon-parrot-800x800.jpg&f=1&nofb=1"/>
             { props.message }
             <span>Like {props.likes}</span>
             
        </div>
    )
}

export default Post;