import React from "react";
import {NavLink} from "react-router-dom";
import {Menu} from "semantic-ui-react";

const header = props => <div className="col header">
    <Menu borderless style={{
        marginTop: "1em",
        marginBottom: "1em",
        border: "none",
        borderRadius: 0,
        boxShadow: "none",
        transition: "box-shadow 0.5s ease, padding 0.5s ease"
    }}>
        <Menu.Item as={NavLink} to="/home">Metrikler</Menu.Item>
        <Menu.Item as={NavLink} to="/metric/add">Metrik Ekle</Menu.Item>
        <Menu.Item onClick={() => props.resetLoginDispatch()}>Çıkış Yap</Menu.Item>
    </Menu>
</div>

export default header;