import { View, Text, StyleSheet, BackHandler } from 'react-native'
import estilos from '../styles'
import Voltar from '../botoes/voltar'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'

//Está adaptado para as telas que não sejam a Home
export default function Screen({ topBarTitle, body }) {
    const { setTela, listaDeTelas, setListaDeTelas } = useContext(GlobalContext)

    useEffect(() => {
        const backAction = () => {
            const telaAnterior = listaDeTelas[listaDeTelas.length - 2]
            if (telaAnterior === 'home') {
                setListaDeTelas(['home'])
                setTela('home')
            } else {
                listaDeTelas.pop()
                setListaDeTelas(listaDeTelas)
                setTela(telaAnterior)
            }
            return true
        }

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        )

        return () => backHandler.remove()
    }, [])

    return (
        <View style={estilos.newContainer}>
            <View style={styleScreen.topBar} >
                <Voltar />
                <View style={{ justifyContent: 'flex-end', paddingBottom: 3, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {topBarTitle}
                    </Text>
                </View>
            </View>
            <View style={estilos.containerHome}>
                {body}
            </View>
        </View>

    )
}

const styleScreen = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: '#20DCE6'
    }
}) 