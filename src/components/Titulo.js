import React, { Fragment } from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default propos => (
    <Fragment>
        <Text style={Estilo.TxtG} >{propos.principal} </Text>
        <Text>{propos.secundario}  </Text>
    </Fragment>
)
