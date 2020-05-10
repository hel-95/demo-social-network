import React, {Suspense} from 'react'
import './App.scss'
import HeaderContainer from './components/Header/HeaderContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import {BrowserRouter, Route} from 'react-router-dom'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
//import ProfileContainer from './components/Profile/ProfileContainer'
import LoginPage from './components/Login/Login'
import { initializeApp } from './redux/appReducer'
import {connect, Provider} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'
//import DialogsContainer from'./components/Dialogs/DialogsContainer'
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));




class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
}
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
    // <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
       
        <div className="app-wrapper-content">
          
          <Route path="/profile/:userId?" render={ () => {
             return <Suspense fallback={<div>Loading...</div>}>
                        <ProfileContainer />
                    </Suspense> 
               }}/>
          <Route path="/dialogs" render={ () => {
          return <Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer /> } />
                    </Suspense>
            }}/>
          <Route path="/users" render={ () => <UsersContainer /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/musics" render={ () => <Music /> }/>
          <Route path="/login" render={ () => <LoginPage /> }/>

          <Route path="/settings" />
          
        </div>
       
      </div>
    // </BrowserRouter>
   );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

let AppContainer = compose (
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

  const SamuraiJSApp = props => {
    return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  }

  export default SamuraiJSApp;
