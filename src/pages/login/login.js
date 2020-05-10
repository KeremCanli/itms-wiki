import React from "react";
import {connect} from "react-redux";
import {login as loginDispatch, resetLogin as resetLoginDispatch} from "../../redux/actions/login.js";
import LoginSection from "../../components/login-section/login-section.js";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        props.loginState.isLogin === false && props.resetLoginDispatch();
    }

    render() {
        return (<div>
            <div className="login-background"/>
            <div className="lg-middle lg-table login md-middle md-table sm-middle sm-table wrap xl-middle xl-table">
                <div className="col sm-hidden"/>
                <LoginSection loginDispatch={this.props.loginDispatch} loginState={this.props.loginState}/>
                <div className="col sm-hidden"/>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return {loginState: state.login};
};

const mapDispatchToProps = {
    loginDispatch: loginDispatch,
    resetLoginDispatch: resetLoginDispatch
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);