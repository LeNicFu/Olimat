import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context'
import Navegar from '../botoes/navegar'
import { apagarLista } from '../data'
import Screen from '../build/Screen'
import estilos from '../styles'

export default function ApagarLista() {
    const { listaDeTelas, setListaDeTelas, setTela } = useContext(GlobalContext)

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
                        É preciso digitar o número 2026 e depois confirmar.
                    </Text>
                </View>
                <View style={{ height: 20 }} />
                <TextInput
                    style={estilos.nome}
                    placeholder="Digite 2026"
                    onChangeText={newNumero => setNumero(newNumero)}
                    defaultValue={numero}
                />
                <View style={estilos.containerBotaoExcluir}>
                    <TouchableOpacity style={estilos.botaoExcluir}
                        onPress={() => (numero == 2026 ? [Apaga(), setTela('home'), setListaDeTelas(['home'])] : undefined)}
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
