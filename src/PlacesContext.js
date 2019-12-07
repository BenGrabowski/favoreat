import React, {Component} from 'react'
import TokenService from './services/token-service';

const PlacesContext = React.createContext({
    // user_id: undefined,
    places: [],
    error: null,
    selectedPlace: undefined,
    loggedIn: false,
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
    }

    setUserId = id => {
        // this.setState({ user_id: id })
        TokenService.saveUserId(id)
    }
    
    setPlaces = places => {
        (Array.isArray(places))
        ? console.log('places is not an array')
        : this.setState({ places })
    }

    // setAddingItem = status => {
    //     this.setState({ isAddingItem: status })
    // }

    setSelectedPlace = place => {
        this.setState({ selectedPlace: place })
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