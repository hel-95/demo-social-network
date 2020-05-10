import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux'

// const NavbarContainer = () => {
    

//     return <StoreContext.Consumer>
//              { (store) => {
//                 return  <Navbar friends={store.getState().sidebar.friends} />
// }}
//         </StoreContext.Consumer>
    
// }

let mapStateToProps = (state) => {
        return {
             friends: state.sidebar.friends
        }
}

let mapDispatchToProps = (dispatch) => {
        return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;