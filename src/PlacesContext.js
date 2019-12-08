import React, {Component} from 'react'
import TokenService from './services/token-service';

const PlacesContext = React.createContext({
    // user_id: undefined,
    places: [],
    error: null,
    selectedPlace: undefined,
    loggedIn: false,
    isFetching: false,
    // isAddingItem: false,
    // setAddingItem: () => {},
    updatePlace: () => {},
    updateItems: () => {},
    setPlaces: () => {},
    setError: () => {},
    setSelectedPlace: () => {},
    setLoggedIn: () => {},
    setLoggedOut: () => {},
    clearError: () => {},
})
export default PlacesContext

export class PlacesListProvider extends Component {
    state = {
        // user_id: undefined,
        places: [],
        selectedPlace: undefined,
        error: null,
        isAddingItem: false,
        isFetching: false,
    }

    setUserId = id => {
        // this.setState({ user_id: id })
        TokenService.saveUserId(id)
    }
    
    setPlaces = places => {
        (Array.isArray(places))
        ? this.setState({ places })
        : console.log('places is not an array')
    }

    // setAddingItem = status => {
    //     this.setState({ isAddingItem: status })
    // }

    setSelectedPlace = place => {
        this.setState({ selectedPlace: place })
    }
    
    setFetching = status => {
        this.setState({
            isFetching: status
        })
    }
      
    updatePlace = () => {}

    setLoggedIn = () => {
        this.setState({ loggedIn: true })
    }

    setLoggedOut = () => {
        this.setState({ loggedIn: false })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }
    
    render() {
        const contextValue = {
            // user_id: this.state.user_id,
            places: this.state.places,
            selectedPlace: this.state.selectedPlace,
            setUserId: this.setUserId,
            setPlaces: this.setPlaces,
            setLoggedIn: this.setLoggedIn,
            setLoggedOut: this.setLoggedOut,
            updatePlace: this.updatePlace,
            setError: this.setError,
            setSelectedPlace: this.setSelectedPlace,
            clearError: this.clearError,
            isFetching: this.isFetching,
            setFetching: this.setFetching,
            // isAddingItem: this.state.isAddingItem,
            // setAddingItem: this.setAddingItem,
        }

        return (
            <PlacesContext.Provider value={contextValue}>
                {this.props.children}
            </PlacesContext.Provider>
        )
    }
}