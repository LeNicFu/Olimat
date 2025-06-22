import { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import { GlobalContext } from '../context'
import { apagarNome } from '../data'
import { estilo } from '../screens/Lista'
import estilos from '../styles'

export default function Editar() {
    const { codigo, nome, id, setTela, listaDeTelas, setListaDeTelas } = useContext(GlobalContext)
    //console.log('LISTA DE TELAS:', listaDeTelas)

    async function excluirNome() {
        await apagarNome(id)
        return alert(`O nome\n${nome}\nfoi excluído da lista`)
    }
    return <Screen
        topBarTitle={'Opções de edição'}
        body={
            <View style={[estilos.container, { width: '100%' }]}>
                <View
                    style={{
                        alignItems: 'center', justifyContent: 'center', height: 65, backgroundColor: '#BCB9BA', borderRadius: 8, width: '98%', marginBottom: 30
                    }}>
                    <Text style={estilo.textoNome}>
                        {nome}
                    </Text>
                    <Text style={estilo.textoCodigo}>
                        {codigo}
                    </Text>
                </View>
                <View style={estilos.containerBotao}>
                    <TouchableOpacity style={estilos.botao}
                        onPress={() => [setTela('editarNome'), setListaDeTelas([...listaDeTelas, 'editarNome'])]}
                    >
                        <Text style={estilos.textoBotao}>
                            Editar o nome
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.containerBotao}>
                    <TouchableOpacity style={estilos.botao}
                        onPress={() => [setTela('home'), setListaDeTelas(['home'])]}
                    >
                        <Text style={estilos.textoBotao}>
                            Início
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 40 }}>
                </View>
                <View style={estilos.containerBotaoExcluir}>
                    <TouchableOpacity style={estilos.botao}
                    onPress={() => [excluirNome(), setTela('home'), setListaDeTelas(['home'])]}
                    >
                        <Text style={estilos.textoBotao}>
                            Excluir da lista
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
    />
}