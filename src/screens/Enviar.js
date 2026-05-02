import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import Navegar from '../botoes/navegar'
import estilos from '../styles'
import { use, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { getAlunos } from '../data'
import { } from 'react-native'
import * as MailComposer from 'expo-mail-composer'
import { School } from '../data/schools'


export default function Enviar() {
    const { listaDeTelas, escola, setEscola, test, setTest, alunos, setAlunos } = useContext(GlobalContext)

    const [alunosEnviar, setAlunosEnviar] = useState([])
    const [senhaEnviar, setSenhaEnviar] = useState('')
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setAlunos(getAlunos())
    }, [])
    
    useEffect(() => {
        if (alunos[0]) {
            setEscola(School(alunos[0].codigo))
        }
        // alert('Por favor, digite a senha antes de enviar. Ao clicar no botão "Enviar a lista" a janela do seu e-mail será aberta com a mensagem pronta para ser enviada. Então basta clicar no ícone de enviar.')
    }, [reload])

    function ListaOrdemAlfabetica() {
        alunosEnviar.sort(function (a, b) {
            if (a.nome > b.nome) {
                return 1
            }
            if (a.nome < b.nome) {
                return -1
            }
            if (a.nome = b.nome) {
                return 0
            }
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
            alert('A senha está incorreta ou o campo para o nome da "escola" está em branco.')
        }
    }

    return <Screen
        topBarTitle={'Enviar a lista'}
        body={
            <View style={estilos.container}>
                {escola ?
                    <Text style={{ paddingBottom: 40, fontSize: 30, textAlign: 'center' }}>
                        {escola}
                    </Text>
                    :
                    <TouchableOpacity
                    onPress={() => setReload(!reload)}
                    >
                            <Text style={[estilos.nome, {color: '#666666'}]}>
                                Escola
                            </Text>
                    </TouchableOpacity>
                }
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
            </View>
        }
    />
}
