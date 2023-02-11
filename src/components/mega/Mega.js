import React, { Component } from 'react';
import { View,Button, Text, TextInput } from 'react-native';
import Estilo from '../estilo';
import Numero from './Numero';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }


    // constructor(props){
    //     super(props)

    //     this.alterarNumero = this.alterarNumero.bind(this)
    // }

    alterarNumero = (qtde) => {
        this.setState({ qtdeNumeros: qtde })

    }
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo

    }

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdeNumeros).fill()
    //         .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
    //         .sort((a,b) => a-b) 
    //     this.setState({numeros})

    // }

    gerarNumeros = () => {
        const { qtdeNumeros } = this.state
        const numeros = []

        for(let i= 0; i < qtdeNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)

        }
        numeros.sort((a,b)=> a - b)
        this.setState({numeros})
    }

    exibirnumeros = () => {
        const nums = this.state.numeros
        return nums.map(num =>{
            return <Numero num={num} ></Numero>
        })
    }

    render(){
    return (
        <>
            <Text style={Estilo.TxtG}>
                Gerador mega sena:
            </Text>
            <TextInput
                keyboardType={'numeric'}
                style={{ borderBottomWidth: 1 }}
                placeholder='Qtd de Números'
                value={`${this.state.qtdeNumeros}`}
                onChangeText={qtde => this.alterarNumero(qtde)}
            ></TextInput>
            <Button title='Gerar'
                    onPress={this.gerarNumeros}
            ></Button>
            <View style={{
                flexDirection:'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
            {this.exibirnumeros()}
            
            </View>
            
        </>
    )

    }
}

