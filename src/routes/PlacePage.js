import React, { Component } from 'react'
import PlacesContext from '../PlacesContext'
import Place from '../components/Place/Place'
import PlacesApiService from '../services/places-api-service'

class PlacePage extends Component {
    static contextType = PlacesContext
    
    componentDidMount() {
        window.scrollTo(0, 0)
        this.context.clearError()
        PlacesApiService.getPlace(
            this.props.match.params.id,
            this.context.user_id
        )
            .then(place => this.context.setSelectedPlace(place))
            .then(this.context.setFetching(false))
            .catch(this.context.setError)
    }

    renderNotFound = () => {
        return <h2>Place Not Found</h2>
    }
    
    render() {
        return (
            <PlacesContext.Consumer>
                {(context) => {
                    if (context.isFetching) {
                        return <h2>Loading...</h2>
                    } else if (context.selectedPlace === undefined) {
                        return <h2>Place Not Found</h2>
                    } else {
                        return (
                            <>
                            <Place 
                                id={context.selectedPlace.id}
                                name={context.selectedPlace.place_name}
                                type={context.selectedPlace.type}
                                notes={context.selectedPlace.notes}
                                hh={context.selectedPlace.hh}
                                hh_start={context.selectedPlace.hh_start}
                                hh_end={context.selectedPlace.hh_end}
                                items={context.selectedPlace.items}
                            />
                            <button 
                                onClick={() => this.props.history.push('/places')}
                                className="go-back"
                            >
                                Back
                            </button>
                            </>
                        )
                    }
                }}
            </PlacesContext.Consumer>
        )
    }
}

export default PlacePage