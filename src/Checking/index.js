import { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import estilos from '../styles'
import Navegar from '../botoes/navegar'
import { School } from '../data/schools'


export default function Checking() {
    const { codigo, alunos, setScanned, escola } = useContext(GlobalContext)

    const checkCode = () => {
        for (let i = 0; i < alunos.length; i++) {
            const item = alunos[i]
            if (codigo == item.codigo) {
                console.log('Código já cadastrado para o aluno:', item.nome)
                return false
            }
        }
        return true
    }

    const checkSchool = async () => {
        const school = await School(codigo)
        console.log(school)
        if (escola === school) {
            return true
        }
        return false
    }

    // const checkingSchool = true
    const checkingSchool = checkSchool()
    console.log('Resultado da verificação da escola:', checkingSchool)

    const checkingCode = checkCode()

    return <>
        {checkingSchool ?
            <View>
                <Text>
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
            </View> :
            <>
                {checkingCode ?
                    <>
                        <View style={estilos.containerConfereNumero}>
                            <Text style={estilos.confereNumero}>
                                {codigo}
                            </Text>
                            <Text style={estilos.confereNumero}>
                                Se o número estiver correto confirme no botão abaixo para digitar o nome, caso contrário, toque no botão para escanear novamente.
                            </Text>
                        </View>
                        <Navegar
                            proximaTela={'nome'}
                            titulo={'Nome'}
                        />
                        <View style={estilos.containerBotao}>
                            <TouchableOpacity style={estilos.botao}
                                onPress={() => setScanned(false)}>
                                <Text style={estilos.textoBotao}>
                                    Escanear novamente
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </> :
                    <>
                        <View style={estilos.containerConfereNumero}>
                            <Text style={estilos.confereNumero}>
                                {codigo}
                            </Text>
                            <Text style={estilos.confereNumero}>
                                {`O número escaneado já pertence a um aluno cadastrado:\n ${alunos.find(item => item.codigo === codigo)?.nome || 'Nome não encontrado'}`}
                            </Text>
                        </View>
                        <View style={estilos.containerBotao}>
                            <TouchableOpacity style={estilos.botao}
                                onPress={() => setScanned(false)}>
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