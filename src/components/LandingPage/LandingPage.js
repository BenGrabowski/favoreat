import React, { Component } from 'react'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <>
            
            <header className="landing-header">
                <h2 className="tagline">All Your Favorite Places</h2>
                <p className="sub-tagline">All in One Spot</p>
            </header>

            <div className='landing_sections'>
                <section className="info">
                    <h3>Keep track of all your go-to happy hours, dinner spots, bars &amp; more</h3>
                    <p>
                        Enter the places you normally like to go to start, then add more as you find them.
                        Then, the next time the weekend rolls around, no more wasted time racking your brain
                        for the perfect place!
                    </p>
                </section>
                
                <section className="info">
                    <h3>Select the perfect spot for any occasion</h3>
                    <p>
                        You can filter your saved places by establishment type. Just looking to grab a drink?
                        Filter your listed by "bar". 
                    </p>
                </section>    
                    
                <section className="info">
                    <h3>Keep track of previous orders</h3>
                    <p>
                        Do you remember having a fantastic cocktail the last time you were here, but can't
                        remeber what it's called? FavorEat lets you store items you've previously ordered at each
                        bar or restauant.
                    </p>
                </section>
            </div>
            </>
        );
    }
}

export default LandingPage;