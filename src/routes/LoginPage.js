import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import PlacesContext from '../PlacesContext'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = PlacesContext

  handleLoginSuccess = user_id => {
    this.context.setUserId(user_id)
    const { location, history } = this.props
    // const destination = (location.state || {}).from || '/places'
    history.push('/places')
    this.context.setLoggedIn()
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}