import React, {useState}from 'react';
import { Text, TextInput } from 'react-native';
import Estilo from './estilo';

export default propos => {
    const [nome, setNome] = useState("Teste")
return(
    <View> 
        <TextInput placeholder='Digite seu Nome:' 
        value={nome}
        onChangeText={nome => setNome(nome)}
         ></TextInput>
    </View>

)
}