export const ADD_STREAM = 'ADD_STREAM'
export const ADD_PRODUCER = 'ADD_PRODUCER'
export const ADD_CONSUMER = 'ADD_CONSUMER'

export function addStream(name) {
    return {type: ADD_STREAM, name};
}

export function addProducer(name) {
    return {type: ADD_PRODUCER, name};
}

export function addConsumer(name) {
    return {type: ADD_CONSUMER, name};
}
