import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default (props) =>  {
    console.warn(props)
    return (
        <Text style={Estilo.TxtG}> 
        O Valor {props.min} é maior que o valor {props.max}! 
        </Text>

    )
}
