import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlacesContext from '../PlacesContext'
import Place from '../components/Place/Place'

class PlacePage extends Component {
    render() {
        return (
            <PlacesContext.Consumer>
                {(context) => {
                    return <div id="place-page">
                        <Place
                            id={context.selectedPlace.id}
                            name={context.selectedPlace.name}
                            hh={context.selectedPlace.hh}
                            hh_start={context.selectedPlace.hh_start}
                            hh_end={context.selectedPlace.hh_end}
                            type={context.selectedPlace.type}
                            notes={context.selectedPlace.notes}
                            items={context.selectedPlace.items}
                        />
                        <Link 
                            to='/places'
                            className="go-back"
                        >
                            Go Back
                        </Link>
                    </div>
                }}
            </PlacesContext.Consumer>
        )
    }
}

export default PlacePage