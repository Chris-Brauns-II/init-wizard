import {ADD_STREAM, ADD_PRODUCER, ADD_CONSUMER} from "../Actions/modelActions";

const initialState = {
    streams: [],
    producers: [],
    consumers: []
}

function streamApp(state = initialState, action) {
    switch(action.type) {
        case ADD_STREAM:
            return {
                ...state,
                streams: [
                    ...state.streams.concat({
                        name: action.name
                    })
                ]
            };
        case ADD_PRODUCER:
            return {
                ...state,
                producers: [
                    ...state.producers.concat({
                        name: action.name
                    })
                ]
            };
        case ADD_CONSUMER:
            return {
                ...state,
                consumers: [
                    ...state.consumers.concat({
                        name: action.name
                    })
                ]
            }
        default:
            return state;
    }
}

export default streamApp;
