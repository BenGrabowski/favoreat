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
                    <span id="register">Register</span>
                </Link>
                <Link to='/login'>
                    <span id="login">Login</span>
                </Link>
                <Link to='/places' id="demo-button">
                    Demo
                </Link>
                </div>
            </nav>
            </>
        );
    }
}

export default Header;