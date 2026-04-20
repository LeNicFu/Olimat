import { useContext } from 'react'
import { GlobalContext } from '../context'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Voltar() {
    const { setTela, listaDeTelas, setListaDeTelas } = useContext(GlobalContext)
    const atualizarListaDeTelas = () => {
        const telaAnterior = listaDeTelas[listaDeTelas.length - 2]
        if (telaAnterior === 'home') {
            setListaDeTelas(['home'])
            setTela('home')
        } else {
            listaDeTelas.pop()
            setListaDeTelas(listaDeTelas)
            setTela(telaAnterior)
        }
    }
    return <>
        <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => atualizarListaDeTelas()}
        >
            <Entypo name='back' size={30} color={'black'} />
        </TouchableOpacity >
    </>
}

const styles = StyleSheet.create({
    botaoVoltar: {
        justifyContent: 'flex-end',
        paddingLeft: 10
    }
})