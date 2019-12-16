import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Place from '../components/Place/Place'
import PlacesContext from '../PlacesContext'
import PlacesApiService from '../services/places-api-service';
import ListControls from '../components/ListControls/ListControls';
import TokenService from '../services/token-service';
import '../components/PlacesList/PlacesList.css';

export default class PlacesListPage extends Component {
    static contextType = PlacesContext

    state = {
        places: this.context.places,
        sortType: 'all',
        happyHour: false
    }
    
    componentDidMount() {
        this.context.clearError()
        const user_id = TokenService.getUserId()
        PlacesApiService.getPlaces(user_id)
            .then(res => {
                    this.context.setPlaces(res)
                }
            )
            .catch(this.context.setError)
    }

    updateTypeFilter = event => {
        this.setState({
            sortType: event.target.value
        })
    }

    updateHappyHour = checked => {
        this.setState({
            happyHour: checked
        })
    }

    renderPlaces() {
        let places
        
        if (this.state.sortType === 'all') {
            if (!this.state.happyHour) {
                places = this.context.places
            } else {
                places = this.context.places.filter(place => place.hh)
            }
        } else {
            if (!this.state.happyHour) {
                places = this.context.places.filter(place => place.type === this.state.sortType)
            } else {
                places = this.context.places.filter(place => place.type === this.state.sortType && place.hh)                
            }
        }

        return places && places.map(place =>
            <Place
                key={place.id}
                id={place.id}
                name={place.place_name}
                type={place.type}
                // notes={place.notes}
                hh={place.hh}
                hh_start={place.hh_start}
                hh_end={place.hh_end}
                // items={place.items}
                rerenderList={this.rerenderList}
            />   
        )
    }

    render() {
        const { error } = this.context
        return (
            <PlacesContext.Consumer>
                {(context) => {
                    return (<section className="places-list-page">
                        <ListControls 
                            updateTypeFilter={this.updateTypeFilter}
                            updateHappyHour={this.updateHappyHour} 
                        />
                        {error
                            ? <p className='red'>There was an error, try again</p>
                            : this.renderPlaces()}
                        <Link 
                            to='/add-place'
                            className="add-place-button"
                        >
                            Add Place
                        </Link>
                    </section>)
                }}
            </PlacesContext.Consumer>
        )
    }
}