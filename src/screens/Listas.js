import { useContext, useState } from 'react'
import { GlobalContext } from '../context'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { Entypo } from '@expo/vector-icons'
import { ButtonList } from '../botoes/myButton'
import { distanceTop } from '../settings'
import Screen from '../build/Screen'

export default function Listas() {
    const { listaDeTelas, setListaDeTelas, setTela, setFatorDeOrdenacao } = useContext(GlobalContext)

    return <Screen
        topBarTitle={'Ordenar'}
        body={
            <View style={{backgroundColor: '#00AEE7', flex: 1, width: '100%', justifyContent: 'center'}}>
                <View style={{ height: '80%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <ButtonList text={'Mais recentes'} onPress={() => [setFatorDeOrdenacao('id'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`])]} />
                    <ButtonList text={'Ordem alfabética'} onPress={() => [setFatorDeOrdenacao('nome'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`])]} />
                    <ButtonList text={'Código'} onPress={() => [setFatorDeOrdenacao('codigo'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`])]} />
                </View>
            </View>
        }
    />
}
