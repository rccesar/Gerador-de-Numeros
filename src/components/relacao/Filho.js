import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default propos => {
return(
<Text style={Estilo.TxtG}>
    {propos.nome} {propos.sobrenome}
</Text>
)
}