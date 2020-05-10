import Axios from "axios";
import {serviceURL} from "../../configuration/environment.js";
import {LOGIN_RESET, METRIC, METRIC_ERROR, METRIC_START} from "../action-types/action-types.js";

export function metric(token) {
    return dispatch => {
        dispatch({type: METRIC_START});
        setTimeout(() => {
            Axios.get(serviceURL + "/metric", {headers: {Authorization: "Bearer " + token}}).then(response => response.data).then(data => data && dispatch({
                payload: data,
                type: METRIC
            })).catch(error => error.response.status === 401 ? dispatch({type: LOGIN_RESET}) : dispatch({type: METRIC_ERROR}));
        }, 2000);
    }
}