import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import STORE from '../../STORE'
import Place from '../Place/Place';
import './PlacePage.css'

class PlacePage extends Component {
    render() {
        // const place = STORE[0]
        
        return (
            <div id="place-page">
                <Place
                    id={STORE[0].id}
                    name={STORE[0].name}
                    hh={STORE[0].hh}
                    type={STORE[0].type}
                    notes={STORE[0].notes}
                    items={STORE[0].items}
                />
                <Link 
                    to='/places'
                    className="go-back"
                >
                    Go Back
                </Link>
            </div>
        )
    }
}

export default PlacePage;