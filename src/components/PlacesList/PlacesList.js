import React, { Component } from 'react'
import Place from '../Place/Place'

class PlacesList extends Component {    
    render() {
        console.log(this.props)
        
        const places = this.props.store.map(place => {    
            return (
                <Place 
                    id={place.id}
                    name={place.name}
                    type={place.type}
                    notes={place.notes}
                    hh={place.hh}
                    items={place.items}
                />
            )
        });

        return (
            {places}
            // <h1>test</h1>
        );
    }
}

export default PlacesList;