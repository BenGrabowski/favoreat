import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Place.css'
import PlacesContext from '../../PlacesContext';
import PlacesApiService from '../../services/places-api-service';
import TokenService from '../../services/token-service';

class Place extends Component {
    static contextType = PlacesContext

    renderNotes() {
        const notes = this.props.notes
        return (!notes) ? '' : <p id="notes"><span>Notes:</span><br />{notes}</p>
    }

    renderHappyHour() {
        const hh = this.props.hh
        return (hh === "no")
        ? ''
        : <div>
            <p className="hh">Happy Hour:</p>
            <p className="hh">{`${this.props.hh_start} - ${this.props.hh_end}`}</p>
        </div>
    }

    deletePlace = () => {
        const user_id = TokenService.getUserId()
        PlacesApiService.deletePlace(
            user_id,
            this.props.id
        )
        .then(() => {
            const newPlaces = PlacesApiService.getPlaces()
            this.context.setPlaces(newPlaces)
        })    
        .then(() => {
                    this.props.history.push('/places')
                    // this.props.rerenderList()
                }
            )
    }
    
    render() {            
        const items = (this.props.items)
        ? this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>
        })
        : ''

        return (
            <section className="place-section">
                <Link 
                    to={`places/${this.props.id}`}
                    className="place-name"
                    // onClick={this.handlePlaceClick}
                >
                    {this.props.name}
                </Link>
                
                <h3 className="place-type">{this.props.type}</h3>
                
                <div id="hh-box">
                    {/* {happyHour} */}
                    {this.renderHappyHour()}
                </div>
                
                <div id="notes">
                    {/* {notes} */}
                    {this.renderNotes()}
                </div>

                <div id="items-ordered">
                    <p id="items-title"><span>Items Ordered</span></p>
                    <ul id="items-list">
                        {items}
                    </ul>
                </div>
                <Link
                    to={`/places/${this.props.id}/edit`}
                >
                    Edit
                </Link>
                <button onClick={this.deletePlace}>
                    Delete
                </button>
            </section>
        )
    }
}

export default withRouter(Place);