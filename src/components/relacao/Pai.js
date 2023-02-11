import React from 'react';
import Filho from './Filho';
import { Text } from 'react-native';

export default propos => {
return(
    <>
    <Text>Filhos do Pai</Text>
    {propos.children}
    </>
)
}