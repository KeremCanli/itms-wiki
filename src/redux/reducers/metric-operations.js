import {
    ADD_METRIC,
    ADD_METRIC_ERROR,
    ADD_METRIC_START,
    EDIT_METRIC,
    EDIT_METRIC_ERROR,
    EDIT_METRIC_START,
    GET_METRIC,
    GET_METRIC_ERROR,
    GET_METRIC_START,
    RESET_METRIC
} from "../action-types/action-types.js";

const initialState = {
    error: false,
    fetching: false,
    isDone: false,
    metric: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_METRIC:
            return {
                ...state,
                error: false,
                fetching: false,
                isDone: true,
                metric: {}
            };
        case ADD_METRIC_ERROR:
            return {
                ...state,
                error: true,
                fetching: false,
                isDone: false,
                metric: {}
            };
        case ADD_METRIC_START:
            return {
                ...state,
                error: false,
                fetching: true,
                isDone: false,
                metric: {}
            };
        case EDIT_METRIC:
            return {
                ...state,
                error: false,
                fetching: false,
                isDone: true,
                metric: {}
            };
        case EDIT_METRIC_ERROR:
            return {
                ...state,
                error: true,
                fetching: false,
                isDone: false,
                metric: {}
            };
        case EDIT_METRIC_START:
            return {
                ...state,
                error: false,
                fetching: true,
                isDone: false,
                metric: {}
            };
        case GET_METRIC:
            return {
                ...state,
                error: false,
                fetching: false,
                isDone: false,
                metric: action.payload
            };
        case GET_METRIC_ERROR:
            return {
                ...state,
                error: true,
                fetching: false,
                isDone: false,
                metric: {}
            };
        case GET_METRIC_START:
            return {
                ...state,
                error: false,
                fetching: true,
                isDone: false,
                metric: {}
            };
        case RESET_METRIC:
            return {
                error: false,
                fetching: false,
                isDone: false,
                metric: {}
            };
        default:
            return state;
    }
}