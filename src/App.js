import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import Mega from "./components/mega/Mega"

// import Botao from "./components/Botao"
// import Titulo from "./components/Titulo"
// import Aleatorio from "./components/Aleatorio"
// import MinMax from './components/Aleatorio'

// import MinMax from './components/MinMax'
// import {Comp1,Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={7} > </Mega>

        {/* 
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro"> </Titulo>
        <Aleatorio  min={1} max={10}> </Aleatorio>
        <Aleatorio  min={1} max={10}> </Aleatorio>
        <Aleatorio  min={1} max={10}> </Aleatorio>
        <Aleatorio  min={1} max={10}> </Aleatorio> */}
        {/* <MinMax min={10} max={20}></MinMax>
        <MinMax min={1} max={16}></MinMax> */}

        {/* <Comp1 />
        <Comp2 />
        <Primeiro>  Teste</Primeiro> */}
   </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        // backgroundColor: '#008000',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 25,

    }
 
})

