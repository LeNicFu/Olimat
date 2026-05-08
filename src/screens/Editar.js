import { Text, TouchableOpacity, View } from 'react-native'
import estilos, { estilo } from '../styles'
import { GlobalContext } from '../context'
import Screen from '../build/Screen'
import { apagarNome } from '../data'
import { useContext } from 'react'

export default function Editar() {
    const { codigo, nome, id, setTela, listaDeTelas, setListaDeTelas, alunos, setEscola } = useContext(GlobalContext)

    async function excluirNome() {
        await apagarNome(id)
        if (alunos.length === 1) {
            setEscola('')
        }
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