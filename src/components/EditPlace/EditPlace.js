import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlacesContext from '../../PlacesContext';
import PlacesApiService from '../../services/places-api-service';
import AddItem from '../AddItem/AddItem';
import TokenService from '../../services/token-service';
import MenuItem from '../MenuItem/MenuItem';
import './EditPlace.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        window.scrollTo(0, 0);
        this.context.clearError();
        PlacesApiService.getPlace(
            this.props.match.params.id,
            this.context.user_id
        )
            .then(place => {
                this.context.setSelectedPlace(place);
                return place;
            })
            .then(place => {
                    this.setState({
                        place_name: place.place_name,
                        type: place.type,
                        hh: place.hh,
                        hh_start: place.hh_start,
                        hh_end: place.hh_end,
                        notes: place.notes,
                        items: place.items || []
                    });
                }   
            )
            .catch(this.context.setError);
    }
    
    handleEditPlace = event => {
        event.preventDefault()
        const user_id = TokenService.getUserId();
        const placeId = this.props.match.params.id
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
        this.setState({
            items: this.state.items.concat( [item ] ),
            isAddingItem: false
        })
        this.renderItemList()
    }

    removeItem = (event, index) => {
        event.preventDefault();
        const newItems = this.state.items.filter(item => item !== this.state.items[index]);
        this.setState({
            items: newItems
        });
    };

    renderItemInput = event => {
        event.preventDefault();
        this.setState({ isAddingItem: true });
    };

    renderItemList = () => {
        const items = this.state.items.map((item, index) => {
            return <MenuItem itemName={item} index={index} key={index} removeItem={this.removeItem} />
        }) 
        return items
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
        (event.target.value)
        ? this.setState({ hh: event.target.value })
        : this.setState({
            hh: event.target.value,
            hh_start: undefined,
            hh_end: undefined
        })
    }
    
    render() {
        const { place_name, type, hh, notes } = this.state
        return (
            <>
            <header className="add-place-header">
                <h2 className="add-place-title">Edit Place</h2>
            </header>
            
            <section className="add-place">
                <form 
                    className="add-place-form"
                    onSubmit={event => this.handleEditPlace(event)}
                >
                    <div className="place-input">
                        <label htmlFor="place_name">Name:</label>
                        <input 
                            type="text" 
                            name="place_name"
                            className="place_name"
                            value={place_name}
                            onChange={event => this.updatePlaceName(event)} 
                        />
                    </div>
                    
                    <div className="place-input">
                        <label htmlFor="type">Type:</label>
                        <select 
                            name="type"
                            value={type}
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
                        <select 
                            value={hh}
                            onChange={event => this.updateHappyHour(event)}
                        >
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                        </select>
                        <br />
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
                            value={notes}
                            onChange={event => this.updateNotes(event)}
                        >
                        </textarea>
                    </div>
                    
                    <div className="items">
                        <button 
                            onClick={event => this.renderItemInput(event)}
                            className="add-item"
                        >
                            Add Item
                        </button>

                        <ul>
                            {(this.state.items) ? this.renderItemList() : null }
                        </ul>
                        
                        {this.state.isAddingItem 
                            ? <AddItem handleAddItem={this.handleAddItem} /> 
                            : null 
                        }
                    </div>

                    <button 
                        type='submit'
                        className='save-place'
                    >
                        Save
                    </button>
                </form>
            </section>
            <Link 
                to='/places'
                className="go-back" 
            >
                <FontAwesomeIcon icon="arrow-alt-circle-left" />
            </Link>
            </>
        )
    }
}

export default EditPlace