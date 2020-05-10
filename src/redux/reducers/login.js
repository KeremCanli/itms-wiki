import {LOGIN, LOGIN_ERROR, LOGIN_RESET, LOGIN_START} from "../action-types/action-types.js";

const initialState = {
    error: "",
    fetching: false,
    isLogin: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                error: "",
                fetching: false,
                isLogin: true,
                user: action.payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                isLogin: false,
                user: {}
            };
        case LOGIN_RESET:
            return {
                error: "",
                fetching: false,
                isLogin: false,
                user: {}
            };
        case LOGIN_START:
            return {
                ...state,
                error: "",
                fetching: true,
                isLogin: false,
                user: {}
            };
        default:
            return state;
    }
}