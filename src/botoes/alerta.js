import { Entypo } from '@expo/vector-icons'
import { View } from 'react-native'
import estilos from '../styles'

export default function Alerta() {
    return <View style={estilos.containerBotao}>
        <Entypo name="warning" size={50} color="red" />
    </View>
}