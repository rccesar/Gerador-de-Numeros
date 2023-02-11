import React, { useState } from "react";
import { Text, Button } from "react-native";
import Estilo from "./estilo";


export default propos => {
const [numero, setNumero] = useState(propos.inicial)

    const inc = () => setNumero(numero + 1)
    const desc = () => setNumero(numero - 1)

    return(
        <>
        <Text style={Estilo.TxtG}>{numero}</Text>
        <Button title="+" onPress={inc}></Button>
        <Button title="-" onPress={desc}></Button>

        </>
    )
}

