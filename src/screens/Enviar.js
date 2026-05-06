import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import estilos from '../styles'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { getAlunos } from '../data'
import { } from 'react-native'
import * as MailComposer from 'expo-mail-composer'
import Alerta from '../botoes/alerta'


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
            console.log('Abrindo o app de e-mail')
        } else {
            alert('A senha está incorreta.')
        }
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