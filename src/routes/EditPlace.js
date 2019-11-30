import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlacesContext from '../PlacesContext'
import PlacesApiService from '../services/places-api-service'
import AddItem from '../components/AddItem/AddItem'

class EditPlace extends Component {
    state = {
        isAddingItem: false,
        place_name: '',
        type: '',
        hh: undefined,
        hh_start: '',
        hh_end: '',
        notes: '',
        items: []
    }
    
    static contextType = PlacesContext
    
    componentDidMount() {
        this.context.clearError()
        PlacesApiService.getPlace(
            this.props.match.params.id,
            this.context.user_id
        )
            .then(place => this.context.setSelectedPlace(place))
            .then(place => {
                    this.setState({
                        place_name: place.place_name,
                        type: place.type,
                        hh: place.hh,
                        hh_start: place.hh_start,
                        hh_end: place.hh_end,
                        notes: place.notes,
                        items: place.items
                    })
                }   
            )
            .catch(this.context.setError)
    }
    
    handleEditPlace = event => {
        event.preventDefault()
        //PATCH request here
    }

    handleAddItem = item => {
        this.state.items.push(item)
    }

    renderItemInput = event => {
        event.preventDefault()
        this.setState({ isAddingItem: true })
    }

    updatePlaceName = event => {
        this.setState
    }
    
    render() {
        const { place_name, type, hh, hh_start, hh_end, notes } = this.state
        const itemsList = this.state.items.map(item => {
            return <li>{item}</li>
        })
        
        return (
            <section id="edit-place">
                <form 
                    id="edit-place-form"
                    onSubmit={event => this.handleEditPlace(event)}
                >
                    <label htmlFor="place_name">Name:</label>
                    <input 
                        type="text" 
                        name="place_name"
                        value={place_name} 
                    />
                    <br />
                    <label htmlFor="type">Type:</label>
                    <select 
                        name="type"
                        value={type}
                    >
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="brewery">Brewery</option>
                        <option value="winery">Winery</option>
                    </select>

                    <div id="happy-hour-container">
                        <label htmlFor="hh">Happy Hour</label>
                        <input 
                            type="checkbox" 
                            name="hh"
                            value={hh}
                        />
                        <br />
                        <label htmlFor="hh_start">Starts</label>
                        <input 
                            type="time" 
                            name="hh_start" 
                            value={hh_start}
                        />
                        <br />
                        <label htmlFor="hh_end">Ends</label>
                        <input 
                            type="time" 
                            name="hh_end"
                            value={hh_end} 
                        />
                    </div>
                    
                    <div id="notes">
                        <label htmlFor="notes">Notes:</label>
                        <br />
                        <textarea 
                            name="notes" 
                            id="notes" 
                            rows="10"
                            value={notes}
                        >
                        </textarea>
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
        )
    }
}

export default EditPlace