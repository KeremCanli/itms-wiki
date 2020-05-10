import React from "react";
import {Loader, Message} from "semantic-ui-react";
import MetricCard from "../metric-card/metric-card.js";
import "./metric-section.css";

class MetricSection extends React.Component {
    componentWillMount() {
        this.props.metricDispatch(this.props.token);
    }

    render() {
        return (<div className="col metric-section">
            <div className="lg-1 md-1 sm-1 wrap xl-1">
                <div className="col">
                    <h1>Metrikler</h1>
                </div>
                {this.props.metricState.fetching ? <div className="col">
                    <div>
                        <Loader active/>
                    </div>
                </div> : this.props.metricState.error ? <div className="col">
                    <Message content="Veri alınırken hata oluştu!" header="Üzgünüz" negative/>
                </div> : this.props.metricState.metric.length === 0 ?
                    <div className="col">
                        <p>Henüz eklenmiş bir metrik bulunmamaktadır.</p>
                    </div> : <div className="wrap xl-gutter-40 xl-3">
                        {this.props.metricState.metric.map(value => <MetricCard
                            getMetricDispatch={this.props.getMetricDispatch} goal={value.goal} id={value.id}
                            key={value.id} metricOperationsState={this.props.metricOperationsState} name={value.name}
                            token={this.props.token}/>)}
                    </div>}
            </div>
        </div>);
    }
}

export default MetricSection;