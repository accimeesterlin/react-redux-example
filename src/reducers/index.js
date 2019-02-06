const initialState = {
    username: 'accimeesterlin',
    age: 5,
    location: 'Atlanta, GA',
    title: 'Software Engineer'
  };
  

// Reducers
function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log('Dispatch has successfully fired!!!');
            console.log('Data: ', action);
            return {
                ...state,
                name: action.name
            }
        case 'DECREMENT':
            return state - 1

        case 'GET_USER':
            console.log('Dispatch has successfully fired!!!');
            console.log('Data: ', action);
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default counter;