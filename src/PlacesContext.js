import React, {Component} from 'react'

const PlacesContext = React.createContext({
    user_id: undefined,
    places: [],
    error: null,
    selectedPlace: undefined,
    loggedIn: false,
    updatePlace: () => {},
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
        user_id: undefined,
        places: [],
        selectedPlace: undefined,
        error: null,
    }

    setUserId = id => {
        this.setState({ user_id: id })
    }
    
    setPlaces = places => {
        this.setState({ places })
    }

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
            user_id: this.state.user_id,
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
        }

        return (
            <PlacesContext.Provider value={contextValue}>
                {this.props.children}
            </PlacesContext.Provider>
        )
    }
}