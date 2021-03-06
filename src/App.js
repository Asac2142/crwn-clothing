import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUserXXX } = this.props;
    //here, we can store the user logged in in our state
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUserXXX({ //aqui estaba setState, pero ahora, usamos Redux
            currentUser: {              
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } 
        setCurrentUserXXX(userAuth);
    });
  }

  componentWillUnmount() {
    //here, it unsubscribes 
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
         <Route exact path='/' component={ HomePage } />
         <Route exact path='/shop' component={ ShopPage } />
         <Route exact path='/checkout' component={ Checkout } />
         <Route 
          exact path='/signin' 
          render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserXXX: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
