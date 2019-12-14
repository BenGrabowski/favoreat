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
                        <h3 className="blue-title">Keep Track of Restaurants, Bars &amp; More</h3>
                        <p>
                            Enter your favorite places to start, then add more as you find them!
                        </p>
                    </section>
                    
                    <section className="info blue">
                        <h3 className="red-title">Choose the Perfect Spot for Any Occasion</h3>
                        <p>
                            Filter your saved places by establishment type. Just looking to grab a drink?
                            Filter your list by "Bar". 
                        </p>
                    </section>    
                        
                    <section className="info red">
                        <h3>Track Previous Orders</h3>
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