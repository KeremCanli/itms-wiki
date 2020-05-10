import React from "react";
import {connect} from "react-redux";
import {register as registerDispatch, resetRegister as resetRegisterDispatch} from "../../redux/actions/register.js";
import RegisterSection from "../../components/register-section/register-section.js";
import "./register.css";

class Register extends React.Component {
    constructor(props) {
        super(props);
        props.resetRegisterDispatch();
    }

    render() {
        return (<div>
            <div className="register-background"/>
            <div className="lg-middle lg-table md-middle md-table register sm-middle sm-table wrap xl-middle xl-table">
                <div className="col sm-hidden"/>
                <RegisterSection registerDispatch={this.props.registerDispatch}
                                 registerState={this.props.registerState}/>
                <div className="col sm-hidden"/>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return {registerState: state.register};
};

const mapDispatchToProps = {
    registerDispatch: registerDispatch,
    resetRegisterDispatch: resetRegisterDispatch
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);