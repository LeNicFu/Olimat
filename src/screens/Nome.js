import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import estilos from '../styles'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import Insere from '../data'

export default function Nome() {
    const { codigo, setCodigo, nome, setNome, listaDeTelas, setTela } = useContext(GlobalContext)
    //console.log('LISTA DE TELAS:', listaDeTelas)

    async function ColetaDados() {
        await Insere(codigo, nome)
        return (
            setCodigo(''),
            setNome(''),
            alert(`O nome\n${nome}\nfoi inserido com o código\n${codigo}`)
        )
    }

    return <Screen
        topBarTitle={'Nome do aluno'}
        body={
            <View style={estilos.container}>
                <TextInput
                    style={estilos.nome}
                    placeholder='Digite o nome do aluno'
                    onChangeText={newNome => setNome(newNome)}
                    defaultValue={nome}
                />
                <View style={estilos.containerBotao}>
                    <TouchableOpacity style={estilos.botao}
                        onPress={() => [ColetaDados(), setTela('home')]}
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

