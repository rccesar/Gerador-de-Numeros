import React, { useState } from 'react';
import { Text, View , StyleSheet} from 'react-native';
import Estilo from './estilo';

export default propos => {

    return (
        <View> 
            <Text style={[Estilo.TxtG,sTYLE.DisplayText]}> 
            {propos.num}
            </Text>

            </View>
                )
}

const style = StyleSheet.create({
   Display: {
    backgroundColor: '#000',
    padding:20,
    width: 300,
   },
   DisplayText: {
    color: '#FFF'
   }

})
