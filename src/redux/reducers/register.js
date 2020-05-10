import {REGISTER, REGISTER_ERROR, REGISTER_RESET, REGISTER_START} from "../action-types/action-types.js";

const initialState = {
    error: false,
    fetching: false,
    isRegister: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                error: false,
                fetching: false,
                isRegister: true
            };
        case REGISTER_ERROR:
            return {
                ...state,
                error: true,
                fetching: false,
                isRegister: false
            };
        case REGISTER_RESET:
            return {
                error: false,
                fetching: false,
                isRegister: false
            };
        case REGISTER_START:
            return {
                ...state,
                error: false,
                fetching: true,
                isRegister: false
            };
        default:
            return state;
    }
}