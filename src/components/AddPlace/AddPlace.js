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
        place_name: '',
        type: '',
        hh: 'no',
        hh_start: '',
        hh_end: '',
        notes: '',
        items: []
    }
    
    handleAddPlace = event => {
        event.preventDefault()
        const user_id = TokenService.getUserId()
        const { place_name, type, hh, hh_start, hh_end, notes, items } = this.state
        const { history } = this.props
        
        PlacesApiService.postPlace(
            user_id, place_name, type, hh, hh_start, hh_end, notes, items
        )
            .then(() => history.push('/places'))
            .catch(this.context.setError)
    }

    renderItemInput = event => {
        event.preventDefault()
        this.setState({ isAddingItem: true })
    }

    renderItemList = event => {
        // event.preventDefault()
        const items = this.state.items.map(item => <li>{item}</li>) 
        return (
            <ul>
                {items}
            </ul>
        )
    }

    renderHhStartEnd = () => {
        return (
            <div id="hh-start-end">
                <label htmlFor="hh_start">Starts</label>
                <input 
                    type="time"
                    name="hh_start"
                    onChange={event => this.updateHhStart(event)} 
                />
                <br />
                <label htmlFor="hh_end">Ends</label>
                <input 
                    type="time" 
                    name="hh_end"
                    onChange={event => this.updateHhEnd(event)}  
                />
            </div>
        )
    }

    handleAddItem = item => {
        console.log(item)
        this.setState({
            items: this.state.items.concat( [item ] ),
            isAddingItem: false
        })
        this.renderItemList()
    }

    updateHhStart = event => {
        this.setState({
            hh_start: event.target.value
        })
    }

    updateHhEnd = event => {
        this.setState({
            hh_end: event.target.value
        })
    }

    updateNotes = event => {
        this.setState({
            notes: event.target.value
        })
    }

    updatePlaceName = event => {
        this.setState({
            place_name: event.target.value
        })
    }

    updateType = event => {
        this.setState({
            type: event.target.value
        })
    }

    updateHappyHour = event => {
        this.setState({
            hh: event.target.value
        })
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
                    <input 
                        type="text" 
                        name="place_name" 
                        id="place_name" 
                        onChange={event => this.updatePlaceName(event)}
                        required 
                    />
                    <br />
                    <label htmlFor="type">Type:</label>
                    <select 
                        name="type"
                        onChange={event => this.updateType(event)}
                    >
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="brewery">Brewery</option>
                        <option value="winery">Winery</option>
                    </select>

                    <div id="happy-hour-container">
                        <label htmlFor="hh">Happy Hour</label>
                        <select onChange={event => this.updateHappyHour(event)}>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        <br />
                        {
                            (this.state.hh === 'yes') 
                            ? this.renderHhStartEnd() 
                            : null
                        }
                    </div>
                    
                    <div id="notes">
                        <label htmlFor="notes">Notes:</label>
                        <br />
                        <textarea 
                            name="notes" 
                            id="notes" 
                            rows="10"
                            onChange={event => this.updateNotes(event)}
                        ></textarea>
                    </div>
                        
                    <ul>
                        {itemsList}
                    </ul>
                    <button onClick={event => this.renderItemInput(event)}>
                        Add Menu Item
                    </button>
                    {this.state.isAddingItem 
                        ? <AddItem handleAddItem={this.handleAddItem} /> 
                        : null 
                    }
                    <br />
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