import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Place from '../components/Place/Place'
import PlacesContext from '../PlacesContext'
import PlacesApiService from '../services/places-api-service';
import ListControls from '../components/ListControls/ListControls';
import TokenService from '../services/token-service';

export default class PlacesListPage extends Component {
    static contextType = PlacesContext

    state = {
        places: this.context.places,
        sortType: 'all',
        happyHour: false
    }
    
    componentDidMount() {
        this.context.clearError()
        const user_id = TokenService.getUserId()
        console.log(user_id)
        console.log('PlacesListPage mounted')
        PlacesApiService.getPlaces(user_id)
            .then(res => {
                    console.log(res)
                    // console.log(typeof(res))
                    this.context.setPlaces(res)
                }
            )
            .catch(this.context.setError)
    }

    // rerenderList = () => {
    //     this.setState({ places: this.state.places })
    // }

    updateTypeFilter = event => {
        this.setState({
            sortType: event.target.value
        })
    }

    updateHappyHour = checked => {
        console.log(checked)
        this.setState({
            happyHour: checked
        })
        // this.setState({
        //     happyHour: event.target.value
        // })
    }

    renderPlaces() {
        // const { places = [] } = this.context
        // const { places } = this.context
        let places
        
        if (this.state.sortType === 'all') {
            if (!this.state.happyHour) {
                places = this.context.places
            } else {
                places = this.context.places.filter(place => place.hh)
            }
        } else {
            if (!this.state.happyHour) {
                places = this.context.places.filter(place => place.type === this.state.sortType)
            } else {
                places = this.context.places.filter(place => place.type === this.state.sortType && place.hh)                
            }
        }
        console.log(places)
        console.log(this.context.places)

        return places && places.map(place =>
            <Place
                key={place.id}
                id={place.id}
                name={place.place_name}
                type={place.type}
                notes={place.notes}
                hh={place.hh}
                hh_start={place.hh_start}
                hh_end={place.hh_end}
                items={place.items}
                rerenderList={this.rerenderList}
            />   
        )
    }

    render() {
        const { error } = this.context
        return (
            <PlacesContext.Consumer>
                {(context) => {
                    return (<section>
                        <ListControls 
                            updateTypeFilter={this.updateTypeFilter}
                            updateHappyHour={this.updateHappyHour} 
                        />
                        {error
                            ? <p className='red'>There was an error, try again</p>
                            : this.renderPlaces()}
                        <Link 
                            to='/add-place'
                            className="add-place"
                        >
                            Add Place
                        </Link>
                    </section>)
                }}
            </PlacesContext.Consumer>
        )
    }
}