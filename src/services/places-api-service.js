import config from '../config'
import TokenService from '../services/token-service'

const PlacesApiService = {
    getPlaces(user_id) {
        return fetch(`${config.API_ENDPOINT}/places`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'user_id': user_id,
            },
        })
        .then(res =>
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))    
             : res.json()
        )
    },
    getPlace(placeId, user_id) {
        return fetch(`${config.API_ENDPOINT}/places/${placeId}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'user_id': user_id,
            },
        })
        .then(res =>
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))    
             : res.json()
        )
    },
    postPlace(user_id, place_name, type, hh, hh_start, hh_end, notes, items) {
        return fetch(`${config.API_ENDPOINT}/places`, {
            method: 'POST',
            headers: {
                'content-type': 'application.json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                user_id,
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