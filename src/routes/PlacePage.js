import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlacesContext from '../PlacesContext'
import Place from '../components/Place/Place'
import PlacesApiService from '../services/places-api-service'

class PlacePage extends Component {
    static contextType = PlacesContext
    
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.context.clearError()
        PlacesApiService.getPlace(
            this.props.match.params.id,
            this.context.user_id
        )
            .then(place => this.context.setSelectedPlace(place))
            .then(console.log(this.context.selectedPlace))
            .catch(this.context.setError)
    }
    
    render() {
        const place = this.context.selectedPlace 

        return (
            <PlacesContext.Consumer>
                {(context) => {
                    return (
                        <Place 
                            name={context.selectedPlace.place_name}
                        />
                    )
                }}
            </PlacesContext.Consumer>
        )
    }
}

export default PlacePage