import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddPlace.css'
import PlacesApiService from '../../services/places-api-service';
import PlacesContext from '../../PlacesContext';
import AddItem from '../AddItem/AddItem'
import TokenService from '../../services/token-service';
import MenuItem from '../MenuItem/MenuItem';

class AddPlace extends Component {
    static contextType = PlacesContext
    
    state = {
        isAddingItem: false,
        place_name: '',
        type: 'Restaurant',
        hh: false,
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

    renderItemList = () => {
        const items = this.state.items.map((item, index) => {
            return <MenuItem itemName={item} index={index} key={index} removeItem={this.removeItem} />
        }) 
        return items
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
        this.setState({
            items: this.state.items.concat( [item ] ),
            isAddingItem: false
        })
        this.renderItemList()
    }

    removeItem = (event, index) => {
        event.preventDefault()
        const newItems = this.state.items.filter(item => item !== this.state.items[index])
        this.setState({
            items: newItems
        })
    }

    updateHappyHour = event => {
        this.setState({
            hh: event.target.value
        })
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
    
    render() {
        return (
            <>
            <header className="add-place-header">
                <h2 className="add-place-title">Add a New Place</h2>
            </header>
            
            <section className="add-place">
                <form 
                    className="add-place-form"
                    onSubmit={event => this.handleAddPlace(event)}
                >
                    <div className="place-input">
                        <label htmlFor="place_name">Name:</label>
                        <input 
                            type="text" 
                            name="place_name" 
                            className="place_name" 
                            onChange={event => this.updatePlaceName(event)}
                            required 
                        />
                    </div>

                    <div className="place-input">
                        <label htmlFor="type">Type:</label>
                        <select 
                            name="type"
                            onChange={event => this.updateType(event)}
                        >
                            <option value="Restaurant">Restaurant</option>
                            <option value="Bar">Bar</option>
                            <option value="Brewery">Brewery</option>
                            <option value="Winery">Winery</option>
                            <option value="Coffee Shop">Coffee Shop</option>
                        </select>
                    </div>

                    <div className="happy-hour-container">
                        <label htmlFor="hh">Happy Hour</label>
                        <select onChange={event => this.updateHappyHour(event)}>
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                        </select>
                        {
                            (this.state.hh === 'true')
                            ? this.renderHhStartEnd() 
                            : ''
                        }
                    </div>
                    
                    <div className="notes">
                        <label htmlFor="notes">Notes:</label>
                        <br />
                        <textarea 
                            name="notes" 
                            className="place-notes" 
                            rows="10"
                            onChange={event => this.updateNotes(event)}
                        ></textarea>
                    </div>
                        
                    <div className="items">
                        {/* <ul>
                            {this.renderItemList()}
                        </ul> */}
                        <button 
                            onClick={event => this.renderItemInput(event)}
                            className="add-item"
                        >
                            Add Item
                        </button>
                        {this.state.isAddingItem 
                            ? <AddItem handleAddItem={this.handleAddItem} /> 
                            : null 
                        }
                        <ul>
                            {this.renderItemList()}
                        </ul>
                    </div>
                    
                    <button 
                        type='submit'
                        className='save-place'
                    >
                        Save
                    </button>
                </form>
                <Link 
                    to='/places'
                    className="go-back" 
                >
                    Back
                </Link>
            </section>
            </>
        );
    }
}

export default AddPlace;