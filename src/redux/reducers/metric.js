import {METRIC, METRIC_ERROR, METRIC_START} from "../action-types/action-types.js";

const initialState = {
    error: false,
    fetching: false,
    metric: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case METRIC:
            return {
                ...state,
                error: false,
                fetching: false,
                metric: action.payload
            };
        case METRIC_ERROR:
            return {
                ...state,
                error: true,
                fetching: false,
                metric: []
            };
        case METRIC_START:
            return {
                ...state,
                error: false,
                fetching: true,
                metric: [],
            };
        default:
            return state;
    }
}