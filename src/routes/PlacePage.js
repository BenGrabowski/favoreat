import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlacesContext from '../PlacesContext'
import Place from '../components/Place/Place'
import PlacesApiService from '../services/places-api-service'

class PlacePage extends Component {
    static contextType = PlacesContext
    
    componentDidMount() {
        this.context.clearError()
        PlacesApiService.getPlace(
            this.context.selectedPlace.id,
            this.context.user_id
        )
            .then(place => this.context.setSelectedPlace(place))
            .catch(this.context.setError)
    }
    
    render() {
        // const place = this.context.selectedPlace

        return (
            <PlacesContext.Consumer>
                {(context) => {
                    const place = context.places.filter(place => place.id === context.selectedPlace.id)
                    console.log(place)

                    return (
                        <div id="place-page">
                        <Place
                            id={place.id}
                            user_id={place.user_id}
                            name={place.name}
                            hh={place.hh}
                            hh_start={place.hh_start}
                            hh_end={place.hh_end}
                            type={place.type}
                            notes={place.notes}
                            items={place.items}
                        />
                        <Link 
                            to='/places'
                            className="go-back"
                        >
                            Go Back
                        </Link>
                    </div>
                    )
                }}
            </PlacesContext.Consumer>
        )
    }
}

export default PlacePage