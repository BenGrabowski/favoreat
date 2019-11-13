import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service';

class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.renderLoginLink()
    }

    renderLogoutLink() {
        return (
            <div className='logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to={'/'}>
                    Log Out    
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='not-logged-in'>
                <Link
                    to='/login'>
                    Login
                </Link>
                <Link
                    to='/register'>
                    Register
                </Link>
            </div>
        )
    }
    
    render() {
        return <>
            <nav className='Header'>
                <Link 
                    to='/'
                    className='justify-start'
                >
                    <h1>FavorEat</h1>                
                </Link>
                <div className='register-login'>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                    <Link to='/places' id="demo-button">
                        Demo
                    </Link>
                </div>
            </nav>
        </>
    }
}

export default Header;