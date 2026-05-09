import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import Screen from '../build/Screen'
import { editarNome } from '../data'
import { useContext } from 'react'
import estilos from '../styles'


export default function EditarNome() {
    const { listaDeTelas, codigo, setCodigo, nome, setNome, id, setId, setTela, setVisibleModal, setMessage } = useContext(GlobalContext)

    async function confirma() {
        await editarNome(nome, id)
        return (
            setVisibleModal(true),
            setMessage(`O nome foi atualizado para\n\n${nome}`)
        )
    }

    return <Screen
        topBarTitle={'Editar nome'}
        body={
            <View style={[estilos.container, { width: '100%' }]}>
                <View style={estiloEditaNome.container}>
                    <Text style={estiloEditaNome.texto}> Editar o nome </Text>
                    <Text style={estiloEditaNome.textoNomeCodigo}> {nome} </Text>
                    <Text style={estiloEditaNome.texto}> associado ao código </Text>
                    <Text style={estiloEditaNome.textoNomeCodigo}> {codigo} </Text>
                </View>
                <TextInput
                    style={estiloEditaNome.nome}
                    onChangeText={newNome => setNome(newNome)}
                    defaultValue={nome}
                />
                <View style={estilos.containerBotao}>
                    <TouchableOpacity style={estilos.botao}
                        onPress={() => [confirma(), setTela('home')]}
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

export const estiloEditaNome = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        width: '90%',
        backgroundColor: '#BCB9BA',
        borderRadius: 8
    },
    texto: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '500'
    },
    textoNomeCodigo: {
        fontSize: 25,
        textAlign: 'center',
        color: 'blue',
    },
    nome: {
        height: 50,
        width: '98%',
        fontSize: 25,
        marginVertical: 30,
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center'
    }
})