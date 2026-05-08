import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import estilos from '../styles'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import Insere from '../data'
import { School } from '../Checking'

export default function Nome() {
    const { codigo, setCodigo, nome, setNome, listaDeTelas, setTela, escola, setEscola } = useContext(GlobalContext)

    async function ColetaDados() {
        await Insere(codigo, nome)
        if(escola.length === 0) {
            setEscola(School(codigo))
        }
        return (
            setCodigo(''),
            setNome(''),
            setTela('home'),
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
                        onPress={() => nome.length > 0 ? ColetaDados() : alert('O nome do aluno não pode ficar em branco!') }
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

