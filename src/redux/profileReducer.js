import { profileAPI } from '../components/api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';



let initialState = {
        posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: 'I go to the market', likes: 8}
            ],
            profile: null,
            status: ''
};
// мы получаем в state = state.profilePage, т.к приходит только необходимый state, а не весь
 const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
                let newPost = {
                    id: 5,
                    message: action.postText,
                    likes: 0
                };
                
                return {
                        ...state,
                         posts: [...state.posts, newPost]
                 };
        
        case SET_USER_PROFILE: 
        return {
                ...state, profile: action.profile
        }

        case SET_STATUS: 
        return {
                ...state, status: action.status
        }
        
        case DELETE_POST:
                return {
                        ...state, 
                        posts: state.posts.filter(p => p.id != action.postId)
                }
        default:
                return state;
        
    }
        
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const deletePost = (postId) => ({type: DELETE_POST, postId});


export const getUserProfile = (userId) => async(dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
}


export const getUserStatus = (userId) => async(dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}


export const updateStatus = (status) => async(dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
        }
}


export default profileReducer;