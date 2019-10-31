import React, { Component } from 'react'
import './LoginForm.css'

class LoginForm extends Component {
    render() {
        return (
            <section>
                <form className='login-form'>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                        </div>
                    <button type='submit'>Log In</button>
                </form>
        </section>
        );
    }
}

export default LoginForm;