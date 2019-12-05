import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlacesContext from '../PlacesContext'
import PlacesApiService from '../services/places-api-service'
import AddItem from '../components/AddItem/AddItem'
import TokenService from '../services/token-service';

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
            .then(place => {
                this.context.setSelectedPlace(place)
                return place
            })
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
        const user_id = TokenService.getUserId()
        const placeId = this.props.match.params.id
        console.log(placeId)
        const { place_name, type, hh, hh_start, hh_end, notes, items } = this.state
        const { history } = this.props
        const newPlace = {
            place_name,
            type,
            hh,
            hh_start,
            hh_end,
            notes,
            items
        }
        
        PlacesApiService.patchPlace(user_id, placeId, newPlace)
            .then(() => history.push('/places'))
            .catch(this.context.setError)
    }

    handleAddItem = item => {
        console.log(item)
        this.setState({
            items: this.state.items.concat( [item ] ),
            isAddingItem: false
        })
        this.renderItemList()
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
    
    renderHhStartEnd = () => {
        return (
            <div id="hh-start-end">
                <label htmlFor="hh_start">Starts</label>
                <input 
                    type="time" 
                    name="hh_start"
                    value={this.state.hh_start}
                    onChange={event => this.updateHhStart(event)} 
                />
                <br />
                <label htmlFor="hh_end">Ends</label>
                <input 
                    type="time" 
                    name="hh_end"
                    value={this.state.hh_end}
                    onChange={event => this.updateHhEnd(event)} 
                />
            </div>
        )
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
        (event.target.value === 'yes')
        ? this.setState({ hh: event.target.value })
        : this.setState({
            hh: event.target.value,
            hh_start: undefined,
            hh_end: undefined
        })
    }
    
    render() {
        const { place_name, type, hh, notes } = this.state
        const itemsList = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>
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
                        onChange={event => this.updatePlaceName(event)} 
                    />
                    <br />
                    <label htmlFor="type">Type:</label>
                    <select 
                        name="type"
                        value={type}
                        onChange={event => this.updateType(event)}
                    >
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="brewery">Brewery</option>
                        <option value="winery">Winery</option>
                    </select>

                    <div id="happy-hour-container">
                        <label htmlFor="hh">Happy Hour</label>
                        <select 
                            value={hh}
                            onChange={event => this.updateHappyHour(event)}
                        >
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
                            value={notes}
                            onChange={event => this.updateNotes(event)}
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