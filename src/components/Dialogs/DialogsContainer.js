import React from 'react'
import classes from './Dialogs.module.scss'
import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {sendMessage} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: (newMessageBody) => {
//             dispatch(sendMessageActionCreator(newMessageBody));
//         },
//         updateNewMessageText: (text) => {
//             dispatch(updateNewMessageTextActionCreator(text));
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(AuthRedirectComponent);
