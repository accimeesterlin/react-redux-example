import axios from 'axios';

export function addAppointment(name) {
    return {
        type: 'INCREMENT',
        payload: {
            name
        }
    }
}


export function getGithubUsernane(username) {
    return dispatch => {
        axios.get('https://api.github.com/search/users?q=' + username)
        .then(function(response) {
            const data = response.data;
            dispatch({ type: 'GET_USER', payload: data });
        })
        .catch(function(error) {
            dispatch({ type: 'GET_USER_ERROR', payload: error.response });
        })

    };
}


