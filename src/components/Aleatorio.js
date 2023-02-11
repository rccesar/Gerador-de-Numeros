import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";


export default propos => {
    const {min,max} = propos
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random()* delta)+ min
    return(
        <Text style={Estilo.TxtG}> O valor aleatorio é {aleatorio}</Text>
    )

    
}