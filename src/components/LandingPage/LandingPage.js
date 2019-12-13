import React, { Component } from 'react'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            // <>
            <div id="landing-hero">
                <header className="landing-header">
                    <h2 className="tagline">All Your <br />Favorite Places</h2>
                    <p className="sub-tagline">All in One Spot</p>
                </header>

                <div className='landing_sections'>
                    <section className="info white">
                        <h3 className="blue-title">KEEP TRACK OF RESTAURANTS, BARS &amp; MORE</h3>
                        <p>
                            Enter your favorite places to start, then add more as you find them!
                        </p>
                    </section>
                    
                    <section className="info blue">
                        <h3 className="orange-title">CHOOSE THE PERFECT SPOT FOR ANY OCCASION</h3>
                        <p>
                            Filter your saved places by establishment type. Just looking to grab a drink?
                            Filter your list by "Bar". 
                        </p>
                    </section>    
                        
                    <section className="info orange">
                        <h3>TRACK PREVIOUS ORDERS</h3>
                        <p>
                            FavorEat lets you store items you've previously ordered at each
                            bar or restauant so you won't forget.
                        </p>
                    </section>
                </div>
            </div>
            // </>
        );
    }
}

export default LandingPage;