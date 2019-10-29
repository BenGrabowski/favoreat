import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';
import STORE from '../../STORE';
import PlacesList from '../PlacesList/PlacesList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <main className='App_main'>
          <Route
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route
            path={'/register'}
            component={RegistrationForm}
          />
          <Route
            path={'/login'}
            component={LoginForm}
          />
          <Route
            path={'/places'}
            component={PlacesList}
            store={STORE}
          />
        </main>
      </div>
    );
  }
}

export default App;