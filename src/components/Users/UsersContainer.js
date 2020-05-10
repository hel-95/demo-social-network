import React from 'react'
import {connect} from 'react-redux'
import {follow, unfollow, setCurrentPage, requestUsers} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProcess } from '../../redux/users.selectors'
import { getFormAsyncErrors } from 'redux-form'


class UsersContainer extends React.Component {
    
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
                
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
               
    }
  

render() {
      return <>
      { this.props.isFetching ? <Preloader /> : null } 
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize} currentPage={this.props.currentPage}
            unfollow={this.props.unfollow} follow={this.props.follow}
            users = {this.props.users}  onPageChanged = {this.onPageChanged}
            isFetching = {this.props.isFetching} toggleFollowingProcess={this.props.toggleFollowingProcess}
            followingInProcess={this.props.followingInProcess} 
            /> 
    </>
}
}


let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers})
    //withAuthRedirect
)(UsersContainer);



// let mapDispatchToProps = dispatch => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPagesAC(pageNumber));
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAC(isFetching));
//         }

//     }
// }




