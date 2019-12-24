import React, {Component} from 'react';
import TokenService from './services/token-service';

const PlacesContext = React.createContext({
    places: [],
    error: null,
    selectedPlace: undefined,
    loggedIn: false,
    isFetching: false,
    updatePlace: () => {},
    updateItems: () => {},
    setPlaces: () => {},
    setError: () => {},
    setSelectedPlace: () => {},
    setLoggedIn: () => {},
    setLoggedOut: () => {},
    clearError: () => {},
});
export default PlacesContext;

export class PlacesListProvider extends Component {
    state = {
        places: [],
        selectedPlace: undefined,
        error: null,
        isAddingItem: false,
        isFetching: false,
    }

    setUserId = id => {
        TokenService.saveUserId(id)
    }
    
    setPlaces = places => {
        (Array.isArray(places))
        ? this.setState({ places })
        : console.log('places is not an array')
    }

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
        this.setState({ loggedIn: true });
    };

    setLoggedOut = () => {
        this.setState({ loggedIn: false });
    };

    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };
    
    render() {
        const contextValue = {
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
        }

        return (
            <PlacesContext.Provider value={contextValue}>
                {this.props.children}
            </PlacesContext.Provider>
        )
    }
}