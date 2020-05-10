const SEND_MESSAGE = 'SEND-MESSAGE';



let initialState = {
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
    ]
}


const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SEND_MESSAGE: 
                let newMessage = {
                    id: 4, 
                    message: action.newMessageBody
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                };
                          
        default: 
                return state;
    }
       
}


export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });



export default dialogsReducer;