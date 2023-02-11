import React from 'react';
import { Button, View,StyleSheet } from 'react-native';

export default propos => {
    return (
<View style={style.Botoes} >
<Button title='+' onPress={propos.inc}></Button>
<Button title='+' onPress={propos.desc}></Button>

</View>    
    )

}


const style= StyleSheet.create({
    Botoes: {
        flexDirection:'row',
    }
})

