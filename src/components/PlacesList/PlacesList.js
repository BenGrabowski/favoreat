import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Place from '../Place/Place'
import ListControls from '../ListControls/ListControls'
import './PlacesList.css'

class PlacesList extends Component {    
    render() {
        console.log(this.props.store)
        
        const places = this.props.store.map((place, i) => {    
            return <Place 
                    key={i}
                    id={place.id}
                    name={place.name}
                    type={place.type}
                    notes={place.notes}
                    hh={place.hh}
                    items={place.items}
                />
        });

        return (
            <div id="places-list">
                <ListControls />
                {places}
                <Link 
                    to='/add-place'
                    className="add-place"
                >
                    Add Place
                </Link>
            </div>
        );
    }
}

export default PlacesList;