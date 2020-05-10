import React from "react";
import {Link, Redirect} from "react-router-dom";
import {Button, Form, Header, Input, Message} from "semantic-ui-react";
import "./login-section.css";

class LoginSection extends React.Component {
    state = {
        eMail: "",
        password: ""
    }

    componentWillReceiveProps(nextProps, nextContext) {
        nextProps.loginState.isLogin && this.setState({
            eMail: "",
            password: ""
        });
    }

    render() {
        return (this.props.loginState.isLogin ? <Redirect to="/home"/> : <div className="col login-section">
            <div className="lg-outside-40 lg-1 md-outside-40 md-1 sm-outside-40 sm-1 wrap xl-outside-40 xl-1">
                <div className="col login-form">
                    <Header size="huge">
                        <Header.Content content="Giriş Yap"/>
                        <Header.Subheader>
                            Hesabınız yok mu? Şimdi <Link to="/register">kayıt ol.</Link>
                        </Header.Subheader>
                    </Header>
                    <Form error loading={this.props.loginState.fetching}
                          onSubmit={() => this.props.loginDispatch(this.state)} size="large">
                        <Form.Field control={Input} id="e-mail" label="E-mail"
                                    onChange={event => this.setState({eMail: event.target.value})} required
                                    value={this.state.eMail}/>
                        <Form.Field control={Input} id="password" label="Parola"
                                    onChange={event => this.setState({password: event.target.value})} required
                                    type="password" value={this.state.password}/>
                        <Form.Field circular color="red" content="Giriş Yap" control={Button} size="medium"/>
                        {this.props.loginState.error &&
                        <Message content={this.props.loginState.error} error header="Başarısız"/>}
                    </Form>
                </div>
            </div>
        </div>);
    }
}

export default LoginSection;