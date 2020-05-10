import React from 'react'
import classes from './MyPosts.module.scss'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import { FormControl } from '../../common/FormsControls/FormsControls'


const MyPosts = props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state;
    // }
        
    console.log('RENDER');
    let postsElement = props.posts.map((post, index) => {
        return (
            <Post 
                key={index}
                message={post.message} 
                likes={post.likes}
            />
        )
    });

    
    const onAddPost = (values) => {
       props.addPost(values.postText);
    }
    
    return (
           <div className={classes.MyPosts}>
            <h3>My posts</h3>
                <div className={classes.newPost}>
                    <PostReduxForm onSubmit={onAddPost}/>
                </div>
                <div className={classes.posts}>
                    { postsElement }
                </div>
            </div>
    )

}

const maxLength10 = maxLengthCreator(10);
const Textarea = FormControl('textarea');

const PostForm = props => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your text'} component={Textarea}
                validate={[required, maxLength10]} name={"postText"} />
            </div>
            <div>
            <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'addPostForm'
})(PostForm);

export default MyPosts;