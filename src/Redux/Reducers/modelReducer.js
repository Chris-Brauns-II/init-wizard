import {addStream, ADD_STREAM} from "../Actions/modelActions";

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
                producers: [
                    ...state.producers,
                    {
                        name: action.name
                    }
                ]
            };
    }
    return state;
}

export default streamApp;
