import Axios from "axios";
import {REGISTER, REGISTER_ERROR, REGISTER_RESET, REGISTER_START} from "../action-types/action-types.js";
import {serviceURL} from "../../configuration/environment.js";

export function register(register) {
    return dispatch => {
        dispatch({type: REGISTER_START});
        setTimeout(() => {
            Axios.post(serviceURL + "/register", {
                email: register.eMail,
                name: register.name,
                password: register.password,
                surname: register.surname
            }).then(response => response.data).then(data => data.token && dispatch({type: REGISTER})).catch(() => dispatch({type: REGISTER_ERROR}));
        }, 2000);
    }
}

export function resetRegister() {
    return dispatch => {
        dispatch({type: REGISTER_RESET});
    }
}