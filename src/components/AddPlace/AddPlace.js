import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddPlace.scss'
import PlacesApiService from '../../services/places-api-service';
import PlacesContext from '../../PlacesContext';
import AddItem from '../AddItem/AddItem'
import TokenService from '../../services/token-service';

class AddPlace extends Component {
    static contextType = PlacesContext
    
    state = {
        isAddingItem: false,
        items: []
    }
    
    handleAddPlace = event => {
        event.preventDefault()
        const user_id = TokenService.getUserId()
        console.log(user_id)
        const place_name = event.target.place_name.value
        const type = event.target.type.value
        const hh = event.target.hh.value
        const hh_start = event.target.hh_start.value
        const hh_end = event.target.hh_end.value
        const notes = event.target.notes.value
        const items = this.state.items
        console.log(items)

        const { location, history } = this.props
        // const destination = (location.state || {}).from || '/places'    
        
        PlacesApiService.postPlace(
            user_id, place_name, type, hh, hh_start, hh_end, notes, items
        )
            .then(history.push('/places'))
            .catch(this.context.setError)
    }

    renderItemInput = event => {
        event.preventDefault()
        this.setState({ isAddingItem: true })
    }

    handleAddItem = event => {
        event.preventDefault()
        console.log(event)
        const item = event.target.item_name.value
        this.state.items.push(item)
    }
    
    render() {
        const itemsList = this.state.items.map(item => {
            return <li>{item}</li>
        })
        
        return (
            <>
            <header id="add-place-header">
                <h2 id="add-place-title">Add a New Place</h2>
            </header>
            
            <section id="add-place">
                <form 
                    id="add-place-form"
                    onSubmit={event => this.handleAddPlace(event)}
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
                        
                    <button onClick={event => this.renderItemInput(event)}>
                        Add Menu Item
                    </button>
                    {this.state.isAddingItem 
                        ? <AddItem handleAddItem={this.handleAddItem} /> 
                        : null 
                    }
                    <br />
                    <ul>
                        {itemsList}
                    </ul>
                    <button type='submit'>Save</button>
                </form>
                <Link 
                    to='/places' 
                >
                    Go Back
                </Link>
            </section>
            </>
        );
    }
}

export default AddPlace;