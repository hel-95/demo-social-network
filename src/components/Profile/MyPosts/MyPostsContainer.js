import React from 'react'
import {addPostActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

// const MyPostsContainer = () => {

//     return <StoreContext.Consumer>
//              { (store) => {
//          let addPost = () => {
//             store.dispatch(addPostActionCreator());
//          }
    
//         let onPostChange = (text) => {
//             store.dispatch(updateNewPostTextActionCreator(text));
//         }
        
//           return  <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
//                     posts={store.getState().profilePage.posts}
//                     newPostText={store.getState().profilePage.newPostText}/> 
// }} 
// </StoreContext.Consumer>          
   
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;