import React, { Component } from 'react'
import './RegistrationForm.css'

class RegistrationForm extends Component {
    render() {
        return (
            <section id="registration">
                <h3>Start adding your FavorEats now!</h3>
                <form className='signup-form'>
                    <div>
                        <label htmlFor="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                        </div>
                    <button type='submit'>Sign Up</button>
                </form>
        </section>
        );
    }
}

export default RegistrationForm;