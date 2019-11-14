import React, { Component } from 'react'
import './RegistrationForm.css'
import AuthApiService from '../../services/auth-api-service';

class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = event => {
        event.preventDefault()
        const { user_name, password } = event.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
        })
        .then(user => {
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }
    
    render() {
        return (
            <section id="registration">
                <h3>Start adding your FavorEats now!</h3>
                <form 
                    className='signup-form'
                    onSubmit={this.handleSubmit}
                >
                    <div>
                        <label htmlFor="user_name">Username:</label>
                        <input type="text" name='user_name' id='user_name' />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name='password' id='password' />
                        </div>
                    <button type='submit'>Sign Up</button>
                </form>
        </section>
        );
    }
}

export default RegistrationForm;