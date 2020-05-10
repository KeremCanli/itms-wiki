import {combineReducers} from "redux";
import Login from "./login.js";
import Metric from "./metric.js";
import MetricOperations from "./metric-operations.js";
import Register from "./register.js";

export default combineReducers({
    login: Login,
    metric: Metric,
    metricOperations: MetricOperations,
    register: Register
});