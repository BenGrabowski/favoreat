import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Place.css'
import PlacesContext from '../../PlacesContext';

class Place extends Component {
    static contextType = PlacesContext

    // handlePlaceClick = () => {
    //     this.context.setSelectedPlace(this.props.id)
    //     console.log(this.props.id)       
    // }
    
    render() {    
        const happyHour = this.props.hh
            ? <div>
                <p className="hh">Happy Hour: Yes</p>
                <p className="hh">{`${this.props.hh.start} - ${this.props.hh.end}`}</p>
            </div>
            : <span>Happy Hour: No</span>

        const notes = this.props.notes
            ? <p id="notes"><span>Notes:</span><br />{this.props.notes}</p>
            : ''
        
        const items = (this.props.items)
        ? this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>
        })
        : ''
        
        return (
            <section className="place-section">
                <Link 
                    to={`place/${this.props.id}`}
                    className="place-name"
                    // onClick={this.handlePlaceClick}
                >
                    {this.props.name}
                </Link>
                
                <h3 className="place-type">{this.props.type}</h3>
                
                <div id="hh-box">{happyHour}</div>
                
                <div id="notes">
                    {notes}
                </div>

                <div id="items-ordered">
                    <p id="items-title"><span>Items Ordered</span></p>
                    <ul id="items-list">
                        {items}
                    </ul>
                </div>
                <button>Edit</button>
                <button>Delete</button>
            </section>
        )
    }
}

export default Place;