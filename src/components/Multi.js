import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

function Comp(){
    return <Text style={Estilo.TxtG}> Camp</Text>
}
function Comp1(){
    return <Text style={Estilo.TxtG}> Camp 1</Text>
}
function Comp2(){
    return <Text style={Estilo.TxtG}> Camp 2 </Text>
}

export {Comp1,Comp2}