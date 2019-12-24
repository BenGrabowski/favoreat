import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import RegistrationPage from '../../routes/RegistrationPage';
import './App.css';
import LoginPage from '../../routes/LoginPage';
import PlacesListPage from '../../routes/PlacesListPage';
import AddPlace from '../AddPlace/AddPlace';
import PlacePage from '../../routes/PlacePage';
import EditPlace from '../../components/EditPlace/EditPlace';
import { PlacesListProvider } from '../../PlacesContext';
import NotFoundPage from '../../routes/NotFoundPage';
import '../../index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleLeft, faEdit, faTrash, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowAltCircleLeft, faEdit, faTrash, faTimesCircle);

class App extends Component {
  
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
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
            exact
            path={'/places'}
            component={PlacesListPage}
          />
          <Route 
            exact
            path={'/places/:id'}
            component={PlacePage}
          />
          <Route
            path={'/add-place'}
            component={AddPlace}
          />
          <Route 
            path={'/places/:id/edit'}
            component={EditPlace}
          />
          <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
      </PlacesListProvider>
    );
  }
}

export default App;