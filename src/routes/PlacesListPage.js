import React, { Component } from 'react'
import Place from '../components/Place/Place'
import PlacesContext from '../PlacesContext'
import PlacesApiService from '../services/places-api-service';
import ListControls from '../components/ListControls/ListControls';

export default class PlacesListPage extends Component {
    static contextType = PlacesContext

    componentDidMount() {
        this.context.clearError()
        PlacesApiService.getPlaces()
            .then(this.context.setPlaces)
            .catch(this.context.setError)
    }

    renderPlaces() {
        const { places = [] } = this.context
        return places.map(place =>
            <Place
                key={place.id}
                id={place.id}
                name={place.place_name}
                type={place.type}
                notes={place.notes}
                hh={place.hh}
                hh_start={place.hh_start}
                hh_end={place.hh_end}
                items={place.items}
            />   
        )
    }

    render() {
        const { error } = this.context
        return (
            <section>
                <ListControls />
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderPlaces()}
            </section>
        )
    }
}