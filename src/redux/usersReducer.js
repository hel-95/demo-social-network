import { usersAPI } from '../components/api/api';
import {updateObjectInArray} from '../utils/object-helper'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE-IS-FOLLOWING-PROCESS';


let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: []
         
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
           return{
                ...state, 
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if(u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {...state, users: [...action.users] }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount }
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROCESS: {
            return {...state, followingInProcess: action.isFetching 
                ? [...state.followingInProcess, action.userId] 
                : [state.followingInProcess.filter(id => id != action.userId)]
                }
        }
            
        default:
            return state;
    }
   
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setToggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProcess = (isFetching,userId) => ({ type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching,userId});


export const requestUsers = (page, pageSize) => async(dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(setToggleIsFetching(true));

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProcess(true, userId));
    let data = await apiMethod(userId);
     if (data.resultCode === 0) {
         dispatch(actionCreator(userId));
     }
     dispatch(toggleFollowingProcess(false, userId));
}

export const follow = (userId) => async(dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}


export const unfollow = (userId) => async(dispatch) =>  {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
 }
  

export default usersReducer;