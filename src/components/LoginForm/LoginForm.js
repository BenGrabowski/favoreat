import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import PlacesContext from '../../PlacesContext';
import './LoginForm.css';

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    static contextType = PlacesContext
    
    handleSubmitJwtAuth = event => {
        event.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = event.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                TokenService.saveUserId(res.user_id)
                this.props.onLoginSuccess(res.user_id)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    renderInvalidMessage = () => {
        return (
            <p className="invalid-login">invalid username or password</p>
        )
    }
    
    render() {
        const { error } = this.state
        
        return (
            <section id="login">
                {(error) ? this.renderInvalidMessage() : null}
                <form 
                    className='login-form'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <div>
                        <label htmlFor="user_name">Username:</label>
                        <input type="text" name='user_name' className="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name='password' className='password' />
                        </div>
                    <button 
                        type='submit'
                        className='register-button'
                    >
                        Log In
                    </button>
                </form>
        </section>
        );
    }
}

export default LoginForm;