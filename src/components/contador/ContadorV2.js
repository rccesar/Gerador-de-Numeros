import React, { useState } from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';


export default propos => {

    const [num, setNum] = useState(0)
    const inc = () => setNum(num + 1)
    const desc = () => setNum(num - 1)

    return (
        <>
            <Text style={Estilo.TxtG}> ContadorV2</Text>
            <ContadorDisplay num={num}></ContadorDisplay>
            <ContadorBotoes inc={inc} desc={desc}></ContadorBotoes>


        </>
    )
}

