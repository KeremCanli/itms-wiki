import React from "react";
import {Link} from "react-router-dom";
import {
    Button,
    ButtonContent,
    Card,
    Dimmer,
    Header,
    Icon,
    List,
    Loader,
    Message,
    Modal,
    Segment
} from "semantic-ui-react";
import "./metric-card.css";

const metricCard = props => <div className="col" style={{
    paddingBottom: "20px",
    paddingTop: "20px"
}}>
    <Card description={props.goal} extra={<div className="ui two buttons">
        <Button animated as={Link} to={`/metric/edit/${props.id}`}>
            <ButtonContent visible>Düzenle</ButtonContent>
            <ButtonContent hidden>
                <Icon name="edit"/>
            </ButtonContent>
        </Button>
        <Modal closeIcon content={<div
            className="lg-outside-40 lg-1 md-outside-40 md-1 sm-outside-40 sm-1 wrap xl-outside-40 xl-1">
            {props.metricOperationsState.fetching ? <div className="col">
                <Segment style={{
                    border: "none",
                    height: "75px"
                }}>
                    <Dimmer active inverted>
                        <Loader/>
                    </Dimmer>
                </Segment>
            </div> : props.metricOperationsState.error ? <div className="col">
                <Message content="Veri alınırken hata oluştu!" header="Üzgünüz" negative/>
            </div> : <div className="col" style={{
                paddingBottom: "20px",
                paddingTop: "20px"
            }}>
                <Header content={props.metricOperationsState.metric.name} dividing/>
                <List>
                    <List.Item description={props.metricOperationsState.metric.goal} header="Amaç"
                               style={{paddingBottom: "10px"}}/>
                    <List.Item description={props.metricOperationsState.metric.measurementPeriod}
                               header="Ölçüm Periyodu" style={{paddingBottom: "10px"}}/>
                    <List.Item description={props.metricOperationsState.metric.measurementType} header="Ölçüm Türü"/>
                </List>
            </div>}
        </div>}
               onOpen={() => props.getMetricDispatch(props.id, props.token)} size="mini"
               trigger={<Button animated="vertical">
                   <ButtonContent hidden>Görüntüle</ButtonContent>
                   <ButtonContent visible>
                       <Icon name="magnify"/>
                   </ButtonContent>
               </Button>}/>
    </div>} header={props.name} style={{
        margin: "0",
        width: "100%"
    }}/>
</div>;

export default metricCard;