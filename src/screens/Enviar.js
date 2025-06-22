import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import Navegar from '../botoes/navegar'
import estilos from '../styles'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { getAlunos } from '../data'
import {  } from 'react-native'
import * as MailComposer from 'expo-mail-composer'


export default function Enviar() {
    const { listaDeTelas } = useContext(GlobalContext)
    //console.log('LISTA DE TELAS:', listaDeTelas)

    const [alunos, setAlunos] = useState([])
    const [escola, setEscola] = useState('')
    const [senhaEnviar, setSenhaEnviar] = useState('')

    useEffect(() => {
        setAlunos(getAlunos())
        alert('Por favor, digite o nome da escola e a senha antes de enviar. Ao clicar no botão "Enviar a lista" a janela do seu e-mail será aberta com a mensagem pronta para ser enviada. Então basta clicar no ícone de enviar.')
    }, []);

    function ListaOrdemAlfabetica() {
        alunos.sort(function (a, b) {
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
        const lista = JSON.stringify(alunos)

        const email = {
            recipients: ['olimat@uesc.br', 'rrsilva@uesc.br'],
            subject: `${escola} (${alunos.length} alunos na lista)`,
            body: `${lista}`,
        };

        await MailComposer.composeAsync(email);
    };

    function enviar() {
        if (escola.length > 0 && senhaEnviar == '25olimat25') {
            enviarEmail()
        } else {
            alert('A senha está incorreta ou o campo para o nome da escola está em branco.')
        }
    }

    return <Screen
        topBarTitle={'Enviar a lista'}
        body={
            <View style={estilos.container}>
                <TextInput
                    style={estilos.nome}
                    placeholder="Escola"
                    onChangeText={newNome => setEscola(newNome)}
                    defaultValue={escola}
                />
                <TextInput
                    style={estilos.nome}
                    placeholder="Senha"
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
