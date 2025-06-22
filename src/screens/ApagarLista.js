import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Screen from '../build/Screen'
import Navegar from '../botoes/navegar'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context'
import { apagarLista } from '../data'
import estilos from '../styles'

export default function ApagarLista() {
    const { listaDeTelas, setListaDeTelas, setTela } = useContext(GlobalContext)
    //console.log('LISTA DE TELAS:', listaDeTelas)

    const [numero, setNumero] = useState(undefined)

    async function Apaga() {
        await apagarLista()
        return alert('Toda a lista foi apagada!')
    }

    return <Screen
        topBarTitle={'Apagar a lista'}
        body={
            <View style={estilos.container}>
                <View style={estilos.containerBotao}>
                    <TouchableOpacity style={estilos.botao}
                        onPress={() => [setTela('home'), setListaDeTelas(['home'])]}
                    >
                        <Text style={estilos.textoBotao}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.containerConfereNumero}>
                    <Text style={estilos.confereNumero}>
                        Após a confirmação, toda a lista será apagada definitivamente!{'\n'}
                        É preciso digitar o número 2025 e depois confirmar.
                    </Text>
                </View>
                <View style={{ height: 20 }} />
                <TextInput
                    style={estilos.nome}
                    placeholder="Digite 2025"
                    onChangeText={newNumero => setNumero(newNumero)}
                    defaultValue={numero}
                />
                <View style={estilos.containerBotaoExcluir}>
                    <TouchableOpacity style={estilos.botaoExcluir}
                        onPress={() => (numero == 2025 ? [Apaga(), setTela('home'), setListaDeTelas(['home'])] : undefined)}
                    >
                        <Text style={estilos.textoBotao}>
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
    />
}
