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
                    ...state.producers,
                    {
                        name: action.name
                    }
                ]
            };
        case ADD_PRODUCER:
            return {
                ...state,
                producers: [
                    ...state.producers,
                    {
                        name: action.name
                    }
                ]
            };
        case ADD_CONSUMER:
            return {
                ...state,
                consumers: [
                    ...state.consumers,
                    {
                        name: action.name
                    }
                ]
            }
        default:
            return state;
    }
}

export default streamApp;
