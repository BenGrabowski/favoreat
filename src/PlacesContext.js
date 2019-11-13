import React, {Component} from 'react'

const PlacesContext = React.createContext({
    user_id: undefined,
    places: [],
    error: null,
    selectedPlace: undefined,
    updatePlace: () => {},
    setPlaces: () => {},
    setError: () => {},
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
      
    updatePlace = () => {}

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
            updatePlace: this.updatePlace,
            setError: this.setError,
            clearError: this.clearError,
        }

        return (
            <PlacesContext.Provider value={contextValue}>
                {this.props.children}
            </PlacesContext.Provider>
        )
    }
}