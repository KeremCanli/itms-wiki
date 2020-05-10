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

const metricCard = props => <div className="col">
    <Card description={props.goal} extra={<div className="ui two buttons">
        <Button animated as={Link} to={`/metric/edit/${props.id}`}>
            <ButtonContent visible>Düzenle</ButtonContent>
            <ButtonContent hidden>
                <Icon name="edit"/>
            </ButtonContent>
        </Button>
        <Modal closeIcon content={<div className="lg-1 md-1 sm-1 wrap xl-1">
            {props.metricOperationsState.fetching ? <div className="col">
                <Segment style={{height: "75px"}}>
                    <Dimmer active inverted>
                        <Loader/>
                    </Dimmer>
                </Segment>
            </div> : props.metricOperationsState.error ? <div className="col">
                <Message content="Veri alınırken hata oluştu!" header="Üzgünüz" negative/>
            </div> : <div className="col">
                <Header content={props.metricOperationsState.metric.name} dividing/>
                <List>
                    <List.Item content={props.metricOperationsState.metric.goal} header="Amaç"/>
                    <List.Item content={props.metricOperationsState.metric.measurementPeriod} header="Ölçüm Periyodu"/>
                    <List.Item content={props.metricOperationsState.metric.measurementType} header="Ölçüm Türü"/>
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
    </div>} header={props.name}/>
</div>;

export default metricCard;