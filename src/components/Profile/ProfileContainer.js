import React from 'react';
import Profile from './Profile';
import {getUserProfile, getUserStatus, updateStatus} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        
    }

    render() {
        
        return(
            <Profile {...this.props} profile={this.props.profile} 
                status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
      
}

let mapStateToProps = state => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id, 
        isAuth: state.auth.isAuth
    })
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter
   // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
 




// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);