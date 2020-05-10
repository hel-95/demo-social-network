import React from 'react'
import classes from './Dialogs.module.scss'
import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'


const Dialogs = props => {
  
    let dialogsElement = props.messagesPage.dialogs.map((dialog, index) => {
        return (
            <DialogItem  
                key={index}
                name={dialog.name} 
                id={dialog.id}
                image={dialog.image}
            /> 
        )
    });


let messagesElement = props.messagesPage.messages.map((message, index) => {
    return (
        <Message 
            key={index}
            message={message.message} 
        />
    )
});



let addNewMessage = (values) => {
   props.sendMessage(values.newMessageBody);
}

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={classes.messages}>
                { messagesElement }
                
                
                <AddMessageForm onSubmit={addNewMessage}/>
                
                    {/* <textarea 
                    value={props.messagesPage.newMessageText}
                    onChange={onMessageChange}></textarea>
                    <button onClick={onSendMessage}>Send</button> */}
                </div>
                
            </div>
      
    )
}



export default Dialogs;