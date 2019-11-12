import React, {Component} from 'react'

const PlacesContext = React.createContext({
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
        places: [],
        selectedPlace: undefined,
        error: null,
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
            places: this.state.places,
            selectedPlace: this.state.selectedPlace,
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