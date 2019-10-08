import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/';
import Login from './Login/';
import SignUp from './SignUp/'; 
import About from './About/'; 
import Contact from './Contact/'; 
import Header from './Header';
import PasswordRecovery from './PasswordRecovery/';
function Public(props) {
  return (
    <main>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/login" render={()=><Login setAuthentication={props.setAuthentication} />} />
        <Route path="/signup" render={()=><SignUp setAuthentication={props.setAuthentication} />} />
        <Route path="/about" render={()=><About setAuthentication={props.setAuthentication} />} />
        <Route path="/contact" render={()=><Contact setAuthentication={props.setAuthentication} />} />
        <Route path="/passwordRecovery" component={PasswordRecovery} />
      </BrowserRouter>
    </main>
  );
}

export default Public;
