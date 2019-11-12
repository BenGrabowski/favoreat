import config from '../config'
import TokenService from '../services/token-service'

const PlacesApiService = {
    getPlaces() {
        return fetch(`${config.API_ENDPOINT}/places`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))    
             : res.json()
        )
    },
    getPlace(placeId) {
        return fetch(`${config.API_ENDPOINT}/places/${placeId}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))    
             : res.json()
        )
    },
    postPlace(place_name, type, hh, hh_start, hh_end, notes, items) {
        return fetch(`${config.API_ENDPOINT}/places`, {
            method: 'POST',
            headers: {
                'content-type': 'application.json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                place_name,
                type,
                hh,
                hh_start,
                hh_end,
                notes,
                items
            }),
        })
        .then(res =>
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))
             : res.json()
        )
    }
}

export default PlacesApiService