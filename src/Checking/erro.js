import { View, Text, TouchableOpacity } from 'react-native'
import estilos from '../styles'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import Alerta from '../botoes/alerta'

export default function Erro() {
    const { codigo, escola, setScanned, setTela, setErro } = useContext(GlobalContext)

    return <>
        <Alerta />
        <View style={estilos.containerAlerta}>
            <Text style={estilos.confereNumero}>
                {codigo}
            </Text>
            <Text style={estilos.confereNumero}>
                O código não pertence a nenhuma escola cadastrada.
            </Text>
        </View>
        <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botao}
                onPress={() => [setErro(false), setScanned(false), setTela('scanner')]}>
                <Text style={estilos.textoBotao}>
                    Escanear novamente
                </Text>
            </TouchableOpacity>
        </View>
    </>
}