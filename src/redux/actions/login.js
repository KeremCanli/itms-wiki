import Axios from "axios";
import {LOGIN, LOGIN_ERROR, LOGIN_RESET, LOGIN_START} from "../action-types/action-types.js";
import {serviceURL} from "../../configuration/environment.js";

export function login(login) {
    return dispatch => {
        dispatch({type: LOGIN_START});
        setTimeout(() => {
            Axios.post(serviceURL + "/login", {
                email: login.eMail,
                password: login.password
            }).then(response => response.data).then(data => data && dispatch({
                payload: data,
                type: LOGIN
            })).catch(error => error.response.status === 404 ? dispatch({
                payload: "Kullanıcı Adı Ya Da Şifre Hatalı",
                type: LOGIN_ERROR
            }) : dispatch({
                payload: "Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz.",
                type: LOGIN_ERROR
            }));
        }, 2000);
    }
}

export function resetLogin() {
    return dispatch => {
        dispatch({type: LOGIN_RESET});
    }
}