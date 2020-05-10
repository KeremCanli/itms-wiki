import React from "react";
import {Redirect} from "react-router-dom";
import {Button, Form, Input, Message} from "semantic-ui-react";
import "./add-or-edit-metric-section.css";

class AddOrEditMetricSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: "",
            matchPath: props.matchPath,
            measurementPeriod: "",
            measurementType: "",
            name: "",
            redirect: false
        };
    }

    componentWillMount() {
        this.props.id && this.props.getMetricDispatch(this.props.id, this.props.token);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        nextProps.metricOperationsState.metric.id && this.setState({
            goal: nextProps.metricOperationsState.metric.goal,
            measurementPeriod: nextProps.metricOperationsState.metric.measurementPeriod,
            measurementType: nextProps.metricOperationsState.metric.measurementType,
            name: nextProps.metricOperationsState.metric.name
        });
        this.state.matchPath !== nextProps.matchPath && this.setState({
            goal: "",
            measurementPeriod: "",
            measurementType: "",
            name: ""
        });
    }

    handleSubmit = () => {
        this.setState({redirect: true});
        this.props.id ? this.props.editMetricDispatch({
            goal: this.state.goal,
            measurementPeriod: this.state.measurementPeriod,
            measurementType: this.state.measurementType,
            name: this.state.name
        }, this.props.id, this.props.token) : this.props.addMetricDispatch({
            goal: this.state.goal,
            measurementPeriod: this.state.measurementPeriod,
            measurementType: this.state.measurementType,
            name: this.state.name
        }, this.props.token);
    }

    render() {
        return ((this.state.redirect && this.props.metricOperationsState.isDone) ? <Redirect to="/home"/> :
            <div className="add-or-edit-metric-section col">
                <div className="lg-1 md-1 sm-1 wrap xl-1">
                    <div className="col title">
                        {this.props.id ? <h1>Metrik Düzenle</h1> : <h1>Metrik Ekle</h1>}
                    </div>
                    <div className="col metric-form">
                        <Form error loading={this.props.metricOperationsState.fetching} onSubmit={this.handleSubmit}
                              size="large">
                            <Form.Field control={Input} id="goal" label="Amaç"
                                        onChange={event => this.setState({goal: event.target.value})} required
                                        value={this.state.goal}/>
                            <Form.Field control={Input} id="measurementPeriod" label="Ölçüm Periyodu"
                                        onChange={event => this.setState({measurementPeriod: event.target.value})}
                                        required value={this.state.measurementPeriod}/>
                            <Form.Field control={Input} id="measurementType" label="Ölçüm Türü"
                                        onChange={event => this.setState({measurementType: event.target.value})}
                                        required value={this.state.measurementType}/>
                            <Form.Field control={Input} id="name" label="İsim"
                                        onChange={event => this.setState({name: event.target.value})} required
                                        value={this.state.name}/>
                            <Form.Field circular color="red" content={this.props.id ? "Düzenle" : "Ekle"}
                                        control={Button} size="medium"/>
                            {this.props.metricOperationsState.error &&
                            <Message content="İşlem sırasında bir hata oluştu!" header="Üzgünüz" negative/>}
                        </Form>
                    </div>
                </div>
            </div>);
    }
}

export default AddOrEditMetricSection;