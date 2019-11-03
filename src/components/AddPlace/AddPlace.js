import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddPlace.scss'
// import {MDCRipple} from '@material/ripple';

// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

class AddPlace extends Component {
    render() {
        return (
            <>
            <header>
                <h2 id="add-place-title">Add a New Place</h2>
            </header>
            
            <section id="add-place">
                <form id="add-place-form">
                    <label htmlFor="place-name">Name:</label>
                    <input type="text" name="place-name" id="place-name" required />
                    <br />
                    <label htmlFor="place-type">Type:</label>
                    <select name="place-type">
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="brewery">Brewery</option>
                        <option value="winery">Winery</option>
                    </select>

                    <div id="happy-hour-container">
                        <label htmlFor="happy-hour">Happy Hour</label>
                        <input type="checkbox" name="happy-hour" />
                        <br />
                        <label htmlFor="hh-start">Starts</label>
                        <input type="time" name="hh-start" />
                        <br />
                        <label htmlFor="hh-end">Ends</label>
                        <input type="time" name="hh-end" />
                    </div>
                    
                    <div id="notes">
                        <label htmlFor="place-notes">Notes:</label>
                        <br />
                        <textarea name="place-notes" id="place-notes" rows="10"></textarea>
                    </div>
    
                    <button className="mdc">Add Menu Item</button>
                    <br />
                    <button>Save</button>
                </form>
                <Link 
                    to='/places' 
                    className="go-back mdc-button">
                    Go Back
                </Link>
            </section>
            </>
        );
    }
}

export default AddPlace;