import Axios from "axios";
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
    LOGIN_RESET,
    RESET_METRIC
} from "../action-types/action-types.js";

export function addMetric(addMetric, token) {
    return dispatch => {
        dispatch({type: ADD_METRIC_START});
        setTimeout(() => {
            Axios.post(process.env.REACT_APP_SERVICE_URL + "/metric", {
                goal: addMetric.goal,
                measurementPeriod: addMetric.measurementPeriod,
                measurementType: addMetric.measurementType,
                name: addMetric.name
            }, {headers: {Authorization: "Bearer " + token}}).then(response => response.data).then(data => data && dispatch({type: ADD_METRIC})).catch(error => error.response.status === 401 ? dispatch({type: LOGIN_RESET}) : dispatch({type: ADD_METRIC_ERROR}));
        }, 2000);
    }
}

export function editMetric(editMetric, id, token) {
    return dispatch => {
        dispatch({type: EDIT_METRIC_START});
        setTimeout(() => {
            Axios.put(process.env.REACT_APP_SERVICE_URL + "/metric/" + id, {
                goal: editMetric.goal,
                measurementPeriod: editMetric.measurementPeriod,
                measurementType: editMetric.measurementType,
                name: editMetric.name
            }, {headers: {Authorization: "Bearer " + token}}).then(response => response.data).then(data => data && dispatch({type: EDIT_METRIC})).catch(error => error.response.status === 401 ? dispatch({type: LOGIN_RESET}) : dispatch({type: EDIT_METRIC_ERROR}));
        }, 2000);
    }
}

export function getMetric(id, token) {
    return dispatch => {
        dispatch({type: GET_METRIC_START});
        setTimeout(() => {
            Axios.get(process.env.REACT_APP_SERVICE_URL + "/metric/" + id, {headers: {Authorization: "Bearer " + token}}).then(response => response.data).then(data => data && dispatch({
                payload: data,
                type: GET_METRIC
            })).catch(error => error.response.status === 401 ? dispatch({type: LOGIN_RESET}) : dispatch({type: GET_METRIC_ERROR}));
        }, 2000);
    }
}

export function resetMetric() {
    return dispatch => {
        dispatch({type: RESET_METRIC});
    }
}