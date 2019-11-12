import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

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
                console.log(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    
    render() {
        // const { error } = this.state
        return (
            <section id="login">
                <form 
                    className='login-form'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <div>
                        <label htmlFor="user_name">Username:</label>
                        <input type="text" name='user_name' id='user_name' />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name='password' id='password' />
                        </div>
                    <button type='submit'>Log In</button>
                </form>
        </section>
        );
    }
}

export default LoginForm;