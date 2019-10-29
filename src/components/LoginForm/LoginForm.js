import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <section>
                <form class='login-form'>
                    <div>
                        <label for="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                        </div>
                    <button type='submit'>Log In</button>
                </form>
        </section>
        );
    }
}

export default LoginForm;