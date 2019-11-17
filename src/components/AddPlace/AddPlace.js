import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddPlace.scss'
import PlacesApiService from '../../services/places-api-service';
import PlacesContext from '../../PlacesContext';
// import {MDCRipple} from '@material/ripple';

// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

class AddPlace extends Component {
    static contextType = PlacesContext
    
    handleAddPlace = event => {
        event.preventDefault()
        const user_id = this.context.user_id
        const place_name = event.target.place_name.value
        console.log(place_name)
        const type = event.target.type.value
        const hh = event.target.hh.value
        const hh_start = event.target.hh_start.value
        const hh_end = event.target.hh_end.value
        const notes = event.target.notes.value
        // const items = event.target.items.value
        const items = ['item 1', 'item 2']

        const { location, history } = this.props
        const destination = (location.state || {}).from || '/places'    
        
        PlacesApiService.postPlace(
            user_id, place_name, type, hh, hh_start, hh_end, notes, items
        )
            .then(history.push(destination))
            .catch(this.context.setError)
    }
    
    render() {
        return (
            <>
            <header id="add-place-header">
                <h2 id="add-place-title">Add a New Place</h2>
            </header>
            
            <section id="add-place">
                <form 
                    id="add-place-form"
                    onSubmit={this.handleAddPlace}
                >
                    <label htmlFor="place_name">Name:</label>
                    <input type="text" name="place_name" id="place_name" required />
                    <br />
                    <label htmlFor="type">Type:</label>
                    <select name="type">
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="brewery">Brewery</option>
                        <option value="winery">Winery</option>
                    </select>

                    <div id="happy-hour-container">
                        <label htmlFor="hh">Happy Hour</label>
                        <input type="checkbox" name="hh" />
                        <br />
                        <label htmlFor="hh_start">Starts</label>
                        <input type="time" name="hh_start" />
                        <br />
                        <label htmlFor="hh_end">Ends</label>
                        <input type="time" name="hh_end" />
                    </div>
                    
                    <div id="notes">
                        <label htmlFor="notes">Notes:</label>
                        <br />
                        <textarea name="notes" id="notes" rows="10"></textarea>
                    </div>
    
                    <button>Add Menu Item</button>
                    <br />
                    <button type='submit'>Save</button>
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