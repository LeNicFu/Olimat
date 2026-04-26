import { Text, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import Navegar from '../botoes/navegar'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { CameraView, useCameraPermissions } from 'expo-camera'
import estilos from '../styles'

export default function Scanner() {
    const { listaDeTelas, setListaDeTelas, codigo, setCodigo, setNome, setTela } = useContext(GlobalContext)
    useEffect(() => {
        setNome('')
    }, [])

    const [scanned, setScanned] = useState(false)

    const handleCodeScanned = (code) => {

        if (code.data.length > 0) {
            setScanned(true)
            setCodigo(code.data)
        }
    }

    const [permission, requestPermission] = useCameraPermissions()

    // Pede permissão ao montar e sempre que retornar à tela sem permissão
    useEffect(() => {
        const pedirPermissao = async () => {
            const resultado = await requestPermission()

            // Se negou, volta para home
            if (!resultado.granted) {
                setTela('home')
            }
        }

        pedirPermissao()
    }, []) // Roda apenas na montagem — como a tela é recriada ao navegar, isso já re-executa ao voltar


    if (!permission?.granted) {
        return null
    }
    return <Screen
        topBarTitle={'Scanner'}
        body={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {!scanned ?
                    <View style={{ height: 200, width: 300 }}>
                        <CameraView style={{ flex: 1 }} barcodeScannerSettings={{ barCodeTypes: ['code128'] }} onBarcodeScanned={handleCodeScanned} />
                    </View>
                    :
                    <>
                        <View style={estilos.containerConfereNumero}>
                            <Text style={estilos.confereNumero}>
                                {codigo}
                            </Text>
                            <Text style={estilos.confereNumero}>
                                Se o número estiver correto confirme no botão abaixo para digitar o nome,
                                caso contrário, toque no botão para escanear novamente.
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
                    </>
                }
            </View>
        }
    />
}
