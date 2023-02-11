import React from "react";
import { Button } from "react-native";

export default propos => {

function executar(){
    console.warn("Exec")
}
    return (
       <Button
        title="Executar"
        onPress={executar}>
       </Button>
    )
}