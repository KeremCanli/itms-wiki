import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "flexiblegs-css/flexiblegs-css.min.css";
import "normalize.css/normalize.css";
import "semantic-ui-css/semantic.min.css";
import Error from "../error/error.js";
import Home from "../home/home.js";
import Login from "../login/login.js";
import Register from "../register/register.js";

const application = () => <BrowserRouter>
    <Switch>
        <Route component={Home} exact path="/home" strict/>
        <Route component={Home} exact path="/metric/add" strict/>
        <Route component={Home} exact path="/metric/edit/:id" strict/>
        <Route component={Home} exact path="/metric/:id" strict/>
        <Route component={Login} exact path="/" strict/>
        <Route component={Register} exact path="/register" strict/>
        <Route component={Error}/>
    </Switch>
</BrowserRouter>

export default application;