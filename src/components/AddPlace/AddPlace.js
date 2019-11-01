import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddPlace.css'

class AddPlace extends Component {
    render() {
        return (
            <>
            <header role="header">
                <h2 id="add-place-title">Add a New Place</h2>
            </header>
            
            <section>
                <form id="add-place">
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
                        <p id="happy-hour-title">Happy Hour:</p>
                        <label htmlFor="happy-hour">Yes</label>
                        <input type="radio" name="happy-hour" value="yes" />
                        <br />
                        <label htmlFor="happy-hour">No</label>
                        <input type="radio" name="happy-hour" value="no" />
                    </div>
                    
                    <div id="notes">
                        <label htmlFor="place-notes">Notes:</label>
                        <br />
                        <textarea name="place-notes" id="place-notes" rows="10"></textarea>
                    </div>
    
                    <button>Add Menu Item</button>
                    <br />
                    <button>Save</button>
                </form>
                <Link to='/places' className="go-back">Go Back</Link>
            </section>
            </>
        );
    }
}

export default AddPlace;