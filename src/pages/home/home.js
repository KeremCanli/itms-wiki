import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {
    addMetric as addMetricDispatch,
    editMetric as editMetricDispatch,
    getMetric as getMetricDispatch
} from "../../redux/actions/metric-operations.js";
import {metric as metricDispatch} from "../../redux/actions/metric.js";
import {resetLogin as resetLoginDispatch} from "../../redux/actions/login.js";
import AddOrEditMetricSection from "../../components/add-or-edit-metric-section/add-or-edit-metric-section.js";
import Header from "../../components/header/header.js";
import MetricSection from "../../components/metric-section/metric-section.js";
import "./home.css";

class Home extends React.Component {
    render() {
        return (this.props.loginState.isLogin ? <div className="lg-table md-table sm-table wrap xl-table">
            <div className="col md-hidden sm-hidden"/>
            <div className="col home">
                <div className="lg-outside-40 lg-1 md-outside-40 md-1 sm-outside-40 sm-1 wrap xl-outside-40 xl-1">
                    <Header resetLoginDispatch={this.props.resetLoginDispatch}/>
                    {this.props.match.path === "/home" &&
                    <MetricSection getMetricDispatch={this.props.getMetricDispatch}
                                   metricDispatch={this.props.metricDispatch}
                                   metricOperationsState={this.props.metricOperationsState}
                                   metricState={this.props.metricState} token={this.props.loginState.user.token}/>}
                    {(this.props.match.path === "/metric/add" || this.props.match.path === "/metric/edit/:id") &&
                    <AddOrEditMetricSection addMetricDispatch={this.props.addMetricDispatch}
                                            editMetricDispatch={this.props.editMetricDispatch}
                                            getMetricDispatch={this.props.getMetricDispatch}
                                            id={this.props.match.params.id} matchPath={this.props.match.path}
                                            metricOperationsState={this.props.metricOperationsState}
                                            token={this.props.loginState.user.token}/>}
                </div>
            </div>
            <div className="col md-hidden sm-hidden"/>
        </div> : <Redirect to="/"/>);
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.login,
        metricOperationsState: state.metricOperations,
        metricState: state.metric
    };
};

const mapDispatchToProps = {
    addMetricDispatch: addMetricDispatch,
    editMetricDispatch: editMetricDispatch,
    getMetricDispatch: getMetricDispatch,
    metricDispatch: metricDispatch,
    resetLoginDispatch: resetLoginDispatch
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);