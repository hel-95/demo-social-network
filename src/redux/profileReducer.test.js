import profileReducer, {addPostActionCreator, deletePost} from './profileReducer'
import React from 'react';
import ReactDOM from 'react-dom'
import App from '../App'


 let state = {
        posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: 'I go to the market', likes: 8}
            ]
};

test('length of posts should be incremented', () => {
        //1. prepare test data
        let action = addPostActionCreator('react-samurai');
                
        //2. action
        let newState = profileReducer(state, action);
  
        //3. expectation
        expect(newState.posts.length).toBe(3);
  
});

test('message of added post should be correct', () => {
        //1. prepare test data
        let action = addPostActionCreator('react-samurai');
              
        //2. action
        let newState = profileReducer(state, action);
  
        //3. expectation
        expect(newState.posts[2].message).toBe('react-samurai');
});


test('after deleting length of posts should be decremented', () => {
        //1. prepare test data
        let action = deletePost(1);
              
        //2. action
        let newState = profileReducer(state, action);
  
        //3. expectation
        expect(newState.posts.length).toBe(1);
});

test('after deleting length should not be decremented if id is incorrect', () => {
        //1. prepare test data
        let action = deletePost(1000);
              
        //2. action
        let newState = profileReducer(state, action);
  
        //3. expectation
        expect(newState.posts.length).toBe(2);
});

