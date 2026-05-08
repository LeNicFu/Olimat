import { Text, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import estilos from '../styles'
import Navegar from '../botoes/navegar'
import Erro from '../Checking/erro'
import { Entypo } from '@expo/vector-icons'
import Alerta from '../botoes/alerta'
import { School } from '../Checking'


export default function Scanned() {
    const { codigo, alunos, checkingSchool, setScanned, escola, setEscola, checkingCode, setTela, erro } = useContext(GlobalContext)

    const [reload, setReload] = useState(false)

    useEffect(() => {
    }, [reload])

    return <Screen
        topBarTitle={'Scanner'}
        body={
            <>
                {erro ?
                    <>
                        <Erro />
                    </> :
                    <>
                        {!checkingSchool ?
                            <>
                                <Alerta />
                                <View style={estilos.containerAlerta}>
                                    <Text style={estilos.confereNumero}>
                                        {codigo}
                                    </Text>
                                    <Text style={estilos.confereNumero}>
                                        O código não pertence à escola
                                    </Text>
                                    <Text style={[estilos.confereNumero, { fontStyle: 'italic' }]}>
                                        {escola}
                                    </Text>
                                    <Text style={estilos.confereNumero}>
                                        como os anteriores
                                    </Text>
                                </View>
                                <View style={estilos.containerBotao}>
                                    <TouchableOpacity style={estilos.botao}
                                        onPress={() => [setScanned(false), setTela('scanner')]}>
                                        <Text style={estilos.textoBotao}>
                                            Escanear novamente
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </> :
                            <>
                                {checkingCode ?
                                    <>
                                        {escola.length === 0 && !reload ?
                                            <View style={{ alignItems: 'center' }}>
                                                <Text style={[estilos.confereNumero, { fontWeight: 'bold' }]}>
                                                    {School(codigo)}
                                                </Text>
                                                <Text style={{ fontSize: 18, textAlign: 'center', marginHorizontal: 20, marginBottom: 10 }}>
                                                    Se a identificação da escola não estiver correta, use o botão para escanear novamente.
                                                </Text>
                                                <TouchableOpacity style={estilos.botao}
                                                    onPress={() => setReload(true)}
                                                >
                                                    <Text style={estilos.textoBotao}>
                                                        Confirmar escola
                                                    </Text>
                                                </TouchableOpacity>
                                            </View> :
                                            <>
                                                <View style={estilos.containerConfereNumero}>
                                                    <Text style={estilos.confereNumero}>
                                                        {codigo}
                                                    </Text>
                                                    <Text style={estilos.confereNumero}>
                                                        Se o número estiver correto confirme no botão abaixo para digitar o nome, caso contrário, toque no botão para escanear novamente
                                                    </Text>
                                                </View>
                                                <Navegar
                                                    proximaTela={'nome'}
                                                    titulo={'Nome'}
                                                />
                                            </>
                                        }
                                        <View style={estilos.containerBotao}>
                                            <TouchableOpacity style={estilos.botao}
                                                onPress={() => [setScanned(false), setTela('scanner')]}>
                                                <Text style={estilos.textoBotao}>
                                                    Escanear novamente
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </> :
                                    <>
                                        <Alerta />
                                        <View style={estilos.containerAlerta}>
                                            <Text style={estilos.confereNumero}>
                                                {codigo}
                                            </Text>
                                            <Text style={estilos.confereNumero}>
                                                {`O número escaneado já foi cadastrado para\n ${alunos.find(item => item.codigo === codigo)?.nome || 'Nome não encontrado'}`}
                                            </Text>
                                        </View>
                                        <View style={estilos.containerBotao}>
                                            <TouchableOpacity style={estilos.botao}
                                                onPress={() => [setScanned(false), setTela('scanner')]}>
                                                <Text style={estilos.textoBotao}>
                                                    Escanear novamente
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                    </>
                                }
                            </>
                        }
                    </>
                }
            </>
        }
    />

}
