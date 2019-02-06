const log = console.log;

const logginMiddleware = (store) => (next) => (action) => {
    log('Old State: ', store.getState());
    log('Dispatch Action: ', action)
    let result = next(action)
    log('New State', store.getState())
    return result
}

export default logginMiddleware;