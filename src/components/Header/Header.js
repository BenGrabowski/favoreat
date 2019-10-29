import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
            <nav className='Header'>
                <Link 
                    to='/'
                    className='justify-start'
                >
                    <h1>FavorEat</h1>                
                </Link>
                <div className='register-login'>
                <Link to='/register'>
                    <span>Register</span>
                </Link>
                <Link to='/login'>
                    <span>Login</span>
                </Link>
                </div>
            </nav>
            </>
        );
    }
}

export default Header;