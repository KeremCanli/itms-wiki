import React from "react";
import {Link} from "react-router-dom";
import {Button, Form, Header, Input, Message} from "semantic-ui-react";
import "./register-section.css";

class RegisterSection extends React.Component {
    state = {
        eMail: "",
        name: "",
        surname: "",
        password: ""
    }

    componentWillReceiveProps(nextProps, nextContext) {
        nextProps.registerState.isRegister && this.setState({
            eMail: "",
            name: "",
            surname: "",
            password: ""
        });
    }

    render() {
        return (<div className="col register-section">
            <div className="lg-outside-40 lg-1 md-outside-40 md-1 sm-outside-40 sm-1 wrap xl-outside-40 xl-1">
                <div className="col register-form">
                    <Header size="huge">
                        <Header.Content content="Kayıt Ol"/>
                        <Header.Subheader>
                            Hesabınız var mı? Şimdi <Link to="/">giriş yap.</Link>
                        </Header.Subheader>
                    </Header>
                    <Form error loading={this.props.registerState.fetching} size="large"
                          onSubmit={() => this.props.registerDispatch(this.state)} success>
                        <Form.Field control={Input} id="name" label="Ad"
                                    onChange={event => this.setState({name: event.target.value})} required
                                    value={this.state.name}/>
                        <Form.Field control={Input} id="surname" label="Soyad"
                                    onChange={event => this.setState({surname: event.target.value})} required
                                    value={this.state.surname}/>
                        <Form.Field control={Input} id="e-mail" label="E-mail"
                                    onChange={event => this.setState({eMail: event.target.value})} required
                                    value={this.state.eMail}/>
                        <Form.Field control={Input} id="password" label="Parola"
                                    onChange={event => this.setState({password: event.target.value})} type="password"
                                    required value={this.state.password}/>
                        <Form.Field color="red" circular content="Kayıt Ol" control={Button} size="medium"/>
                        {this.props.registerState.error &&
                        <Message content="Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz." error
                                 header="Başarısız"/>}
                        {this.props.registerState.isRegister &&
                        <Message content="Kayıt işlemi başarı ile gerçekleşti." header="Başarılı" success/>}
                    </Form>
                </div>
            </div>
        </div>);
    }
}

export default RegisterSection;