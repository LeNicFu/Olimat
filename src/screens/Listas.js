import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { Entypo } from '@expo/vector-icons'
import { ButtonList } from '../botoes/myButton'
import { distanceTop } from '../settings'
import Screen from '../build/Screen'
import { getAlunos } from '../data'
import { School } from '../data/schools'

export default function Listas() {
    const { listaDeTelas, setListaDeTelas, setTela, setFatorDeOrdenacao, escola, setEscola, alunos, setAlunos } = useContext(GlobalContext)


    useEffect(() => {
        setAlunos(getAlunos())
    }, [])

    const Escola = () => {
        if(alunos[0]) {
            setEscola(School(alunos[0].codigo))
        }
    }

    return <Screen
        topBarTitle={'Ordenar'}
        body={
            <View style={{ backgroundColor: '#00AEE7', flex: 1, width: '100%', justifyContent: 'center' }}>
                <View style={{ height: '80%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <ButtonList text={'Mais recentes'} onPress={() => [setFatorDeOrdenacao('id'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`]), Escola()]} />
                    <ButtonList text={'Ordem alfabética'} onPress={() => [setFatorDeOrdenacao('nome'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`]), Escola()]} />
                    <ButtonList text={'Código'} onPress={() => [setFatorDeOrdenacao('codigo'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`]), Escola()]} />
                </View>
            </View>
        }
    />
}
