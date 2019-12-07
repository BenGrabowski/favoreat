import React, { Component } from 'react'
import './ListControls.css'

class ListControls extends Component {
    render() {
        return (
            <div id="list-controls">
                <div id="type-control">
                    <label htmlFor="type">Type:</label>
                    <select name="type" onChange={event => this.props.updateTypeFilter(event)}>
                        <option value="all">All</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="brewery">Brewery</option>
                        <option value="winery">Winery</option>
                        <option value="coffee-shope">Coffee Shop</option>
                    </select>
                </div>
                
                <div id="happy-hour-control">
                    <label htmlFor="happy-hour">Happy Hour</label>
                    <input 
                        id="hh-filter"
                        type="checkbox" 
                        onChange={() => this.props.updateHappyHour(document.getElementById('hh-filter').checked)} 
                    />
                </div>
            </div>
        )
    }
}

export default ListControls;