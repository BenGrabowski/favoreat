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
    const { history } = this.props
    history.push('/places')
    this.context.setLoggedIn()
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2 className="login-header">Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}