import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import * as MailComposer from 'expo-mail-composer'
import * as Clipboard from 'expo-clipboard'
import { Entypo } from '@expo/vector-icons'
import { GlobalContext } from '../context'
import Alerta from '../botoes/alerta'
import Screen from '../build/Screen'
import { getAlunos } from '../data'
import estilos from '../styles'
import { } from 'react-native'


export default function Enviar() {
    const { escola } = useContext(GlobalContext)

    const [alunosEnviar, setAlunosEnviar] = useState([])
    const [senhaEnviar, setSenhaEnviar] = useState('')

    useEffect(() => {
        setAlunosEnviar(getAlunos())
    }, [])

    function ListaOrdemAlfabetica() {
        alunosEnviar.sort(function (a, b) {
            return a.nome.localeCompare(b.nome, 'pt', { sensitivity: 'base' })
        })
    }

    ListaOrdemAlfabetica()

    const enviarEmail = async () => {
        const lista = JSON.stringify(alunosEnviar)

        const email = {
            recipients: ['olimat@uesc.br', 'rrsilva@uesc.br'],
            subject: `${escola} (${alunosEnviar.length} alunos na lista)`,
            body: `${lista}`,
        }

        await MailComposer.composeAsync(email)
    }

    function enviar() {
        if (escola.length > 0 && senhaEnviar == '26olimat26') {
            enviarEmail()
        } else {
            alert('A senha está incorreta.')
        }
    }

    const copiarParaClipboard = async () => {
        const lista = JSON.stringify(alunosEnviar)
        await Clipboard.setStringAsync(lista)
        alert('Lista copiada para a área de transferência!')
    }

    return <Screen
        topBarTitle={'Enviar a lista'}
        body={
            <View style={estilos.container}>
                {escola.length === 0 ?
                    <>
                        <Alerta />
                        <Text style={{ paddingBottom: 40, fontSize: 30, textAlign: 'center' }}>
                            Nenhum código foi registrado até o momento
                        </Text>
                    </>
                    :
                    <>
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 10, right: 10 }}
                        onPress={() => copiarParaClipboard()}
                    >
                        <Entypo name={'copy'} size={50} color= 'black' />
                    </TouchableOpacity>

                        <Text style={{ paddingBottom: 40, fontSize: 30, textAlign: 'center' }}>
                            {escola}
                        </Text>
                        <TextInput
                            style={estilos.nome}
                            placeholder='Senha'
                            onChangeText={newNome => setSenhaEnviar(newNome)}
                            defaultValue={senhaEnviar}
                        />
                        <View style={estilos.containerBotao}>
                            <TouchableOpacity style={estilos.botao}
                                onPress={enviar}
                            >
                                <Text style={estilos.textoBotao}>
                                    Enviar a lista
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        }
    />
}