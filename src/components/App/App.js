import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../../routes/RegistrationPage';
import './App.css';
import LoginPage from '../../routes/LoginPage';
import PlacesListPage from '../../routes/PlacesListPage'
import AddPlace from '../AddPlace/AddPlace';
import PlacePage from '../../routes/PlacePage';
import { PlacesListProvider } from '../../PlacesContext'
import '../../index.css';

class App extends Component {
  
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  render() {
    return (
      <PlacesListProvider>
        <div className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <main className='App_main'>
          <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPage}
          />
          <Route
            path={'/register'}
            component={RegistrationPage}
          />
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route
            path={'/places'}
            component={PlacesListPage}
          />
          <Route 
            path={'/places/:id'}
            component={PlacePage}
          />
          <Route
            path={'/add-place'}
            component={AddPlace}
          />
          </Switch>
        </main>
      </div>
      </PlacesListProvider>
    );
  }
}

export default App;