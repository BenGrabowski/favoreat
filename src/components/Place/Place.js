import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Place.css'

class Place extends Component {
    render() {
        const happyHour = this.props.hh
            ? <span>Happy Hour: Yes</span>
            : <span>Happy Hour: No</span>

        const notes = this.props.notes
            ? <p id="notes"><span>Notes:</span><br />{this.props.notes}</p>
            : ''
        
        const items = (this.props.items)
        ? this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>
        })
        // : <li>No items yet</li>
        : ''
        
        return (
            <section>
                <Link 
                    to={`place/${this.props.id}`}
                    className="place-name"
                >
                    {this.props.name}
                </Link>

                {/* <h2>{this.props.name}</h2> */}
                
                <h3 className="place-type">{this.props.type}</h3>
                
                <p>{happyHour}</p>
                
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
        );
    }
}

export default Place;