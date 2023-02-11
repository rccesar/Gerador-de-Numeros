import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default propos => {
    function lista (){
        return produtos.map(p => {
                return (<Text key={p.id }>
                    {p.id} {p.nome} tem o valor de R$ {p.preco} </Text> 
                    )
        })
    }
return(
    <> 
     <Text style={Estilo.TxtG}>Lista de Produtos</Text>
     {lista()}
     </>
)
}