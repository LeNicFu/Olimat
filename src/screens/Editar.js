import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import estilos, { estilo, estiloModal } from '../styles'
import { GlobalContext } from '../context'
import Screen from '../build/Screen'
import { apagarNome } from '../data'
import { useContext, useState } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'

const tamanhoDoBotao = 50
const tamanhoDaBorda = 2

export default function Editar() {
    const { codigo, nome, id, setTela, listaDeTelas, setListaDeTelas, alunos, setEscola, setVisibleModal, setMessage, message } = useContext(GlobalContext)

    const [visibleModalExcluirNome, setVisibleModalExcluirNome] = useState(false)
    // const [excluirNome, setExcluirNome] = useState(false)

    async function excluirNome() {
        await apagarNome(id)
        if (alunos.length === 1) {
            setEscola('')
        }
        return (
            setVisibleModal(true),
            setMessage(`O nome\n\n${nome}\n\nfoi excluído da lista`)
        )
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
                    <TouchableOpacity style={estilos.botaoExcluir}
                        onPress={() => setVisibleModalExcluirNome(true)}
                    >
                        <Text style={estilos.textoBotao}>
                            Excluir nome
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={visibleModalExcluirNome}
                    transparent={true}
                >
                    <TouchableOpacity
                        style={estiloModal.containerModal1}
                        onPress={() => setVisibleModalExcluirNome(false)}
                    >
                        <TouchableOpacity
                            style={estiloModal.containerModal2}
                            activeOpacity={1}
                        >
                            <View style={estiloModal.containerModal3}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
                                    Confirmar a exclusão do nome?
                                </Text>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                                    <TouchableOpacity
                                        style={[estiloBotoes.container, { backgroundColor: '#F5BF00' }]}
                                        onPress={() => setVisibleModalExcluirNome(false)}
                                    >
                                        <Entypo name='cross' size={tamanhoDoBotao - 2 * tamanhoDaBorda} color={'white'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[estiloBotoes.container, { backgroundColor: 'red' }]}
                                    onPress={() => [excluirNome(), setTela('home'), setListaDeTelas(['home'])]}
                                    >
                                        <FontAwesome name='trash-o' size={tamanhoDoBotao - 5 * tamanhoDaBorda} color={'black'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </View>
        }
    />
}


const estiloBotoes = StyleSheet.create({
    container: {
        width: tamanhoDoBotao,
        height: tamanhoDoBotao,
        alignItems: 'center',
        borderRadius: tamanhoDoBotao / 2,
        borderWidth: tamanhoDaBorda,
    }
})