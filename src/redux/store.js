import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: 'I go to the market', likes: 8}
            ],
            newPostText: 'samuraiJS.com'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Andrei', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8r-Iy0I4BmUU1v-53mKyQAAAA%26pid%3DApi&f=1'},
                {id: 2, name: 'Sveta',image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8r-Iy0I4BmUU1v-53mKyQAAAA%26pid%3DApi&f=1'},
                {id: 3, name: 'Alex',image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8r-Iy0I4BmUU1v-53mKyQAAAA%26pid%3DApi&f=1'},
                {id: 4, name: 'Vitalya',image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8r-Iy0I4BmUU1v-53mKyQAAAA%26pid%3DApi&f=1'},
                {id: 5, name: 'Masha',image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8r-Iy0I4BmUU1v-53mKyQAAAA%26pid%3DApi&f=1'},
                {id: 6, name: 'Jack', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8r-Iy0I4BmUU1v-53mKyQAAAA%26pid%3DApi&f=1'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT?'},
                {id: 3, message: 'Yo'}    
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                  {id: 1, name: 'Alex', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F591093476%2Fbird_400x400.jpg&f=1&nofb=1'},
                  {id: 2, name: 'Sveta', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F591093476%2Fbird_400x400.jpg&f=1&nofb=1'},
                  {id:3, name: 'Masha', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F591093476%2Fbird_400x400.jpg&f=1&nofb=1'} 
                ]
            }
        },
getState() {
        return this._state;
},
_callSubscriber () {
    console.log('state is changed');
},
subscribe (observer) {
    this._callSubscriber = observer;
},

// addPost() {
//         //debugger
//         let newPost = {
//             id: 5,
//             message: this._state.profilePage.newPostText,
//             likes: 0
//             };
    
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state);
//  },

//  updateNewPostText (newText) {
//     //let input = event.target.value;
//      this._state.profilePage.newPostText = newText;
//      this._callSubscriber(this._state);
//  },
//  updateNewMessageText (newMessage) {
     
//     this._state.messagesPage.newMessageText = newMessage;
//     this._callSubscriber(this._state);
// },
// sendMessage() {
//     let newMessage = {
//         id: 4, 
//         message: this._state.messagesPage.newMessageText
//     }
//     this._state.messagesPage.messages.push(newMessage);
//     this._state.messagesPage.newMessageText = '';
//     this._callSubscriber(this._state);
// },
dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);


    this._callSubscriber(this._state);
    
}

}

    window.store = store;
    
 
     

export default store;