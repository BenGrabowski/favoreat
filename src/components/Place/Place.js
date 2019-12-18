import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Place.css'
import PlacesContext from '../../PlacesContext'
import PlacesApiService from '../../services/places-api-service'
import TokenService from '../../services/token-service'
import moment from 'moment'

class Place extends Component {
    static contextType = PlacesContext

    renderNotes() {
        const notes = this.props.notes
        return (!notes) 
        ? '' 
        : <div className="notes-container">
            <h4 className="notes-title">Notes:</h4>
            <p className="notes-content">{notes}</p>
        </div>
    }

    renderHappyHour() {
        const hh = this.props.hh
        const hh_start = moment(this.props.hh_start, 'hh:mm:ss').format('h:mm A')
        const hh_end = moment(this.props.hh_end, 'hh:mm:ss').format('h:mm A')

        return (hh === 'true')
        ? <div>
        <p className="hh">Happy Hour:</p>
        <p className="hh">{`${hh_start} - ${hh_end}`}</p>
        </div>
        : ''
    }

    deletePlace = () => {
        const user_id = TokenService.getUserId()
        PlacesApiService.deletePlace(
            user_id,
            this.props.id
        )
        .then(async () => {
            const newPlaces = await
                PlacesApiService.getPlaces(user_id)
            this.context.setPlaces(newPlaces)
        })    
        .then(() => this.props.history.push('/places'))
    }
    
    render() {            
        const items = (this.props.items)
        ? this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>
        })
        : ''

        const itemHeader = (this.props.items)
        ? <p className="item-header">Items Ordered</p>
        : null

        return (
            <section className="place-section">
                <Link 
                    to={`places/${this.props.id}`}
                    className="place-name"
                    onClick={() => this.context.setFetching(true)}
                >
                    {this.props.name}
                </Link>
                
                <h3 className="place-type">{this.props.type}</h3>
                
                <div id="hh-box">
                    {this.renderHappyHour()}
                </div>
                
                <div id="notes">
                    {this.renderNotes()}
                </div>

                <div id="items-ordered">
                   {itemHeader} 
                    <ul className="items-list">
                        {items}
                    </ul>
                </div>
                
                <div className="place-controls">
                    <Link
                        to={`/places/${this.props.id}/edit`}
                        className="edit-delete"
                    >
                        Edit
                    </Link>
                    <button 
                        onClick={this.deletePlace}
                        className="edit-delete"
                    >
                        Delete
                    </button>
                </div>
            </section>
        )
    }
}

export default withRouter(Place);