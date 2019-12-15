import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service';
import PlacesContext from '../../PlacesContext';

class Header extends Component {
    static contextType = PlacesContext
    
    state = {
        loggedIn: this.context.loggedIn
    }
    
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        TokenService.clearUserId()
        this.renderLoginLink()
        this.context.setLoggedOut()
    }

    renderLogoutLink() {
        return (
            <div className='logged-in'>
                <Link 
                    to={'/places'}
                    id="places-link"
                    className="nav-link"
                >
                    Places
                </Link>
                
                <Link
                    onClick={this.handleLogoutClick}
                    to={'/'}
                    className="nav-link log-out"
                >
                    Log Out    
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='not-logged-in'>
                <Link
                    to='/login'
                    className="nav-link"
                >
                    Login
                </Link>
                <Link
                    to='/register'
                    className="nav-link"
                >
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
                    className='justify-start nav-link'
                >
                    <h1>FavorEat</h1>                
                </Link>
                <div className='register-login'>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                </div>
                {/* <Link 
                    to='/places' 
                    // id="demo-button"
                    className="nav-link"
                >
                    Demo
                </Link> */}
            </nav>
        </>
    }
}

export default Header;