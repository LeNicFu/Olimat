import { useContext } from 'react'
import { GlobalContext } from '../context'
import { Text, TouchableOpacity, View } from 'react-native'
import estilos from '../styles'

export default function Navegar({ proximaTela, titulo }) {
    const { setTela, listaDeTelas, setListaDeTelas } = useContext(GlobalContext)
    const atualizarListaDeTelas = () => {
        if (proximaTela === 'home') {
            setListaDeTelas(['home'])
        } else {
            setListaDeTelas([...listaDeTelas, proximaTela])
        }
    }

    return <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao}
            onPress={() => [setTela(proximaTela), atualizarListaDeTelas()]}
        >
            <Text style={estilos.textoBotao}>
                {titulo}
            </Text>
        </TouchableOpacity>
    </View>
}
