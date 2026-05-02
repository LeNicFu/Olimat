import { Text, TouchableOpacity, View } from 'react-native'
import Screen from '../build/Screen'
import Navegar from '../botoes/navegar'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context'
import { CameraView, useCameraPermissions } from 'expo-camera'
import estilos from '../styles'
import { getAlunos } from '../data'
import Checking from '../Checking'

export default function Scanner() {
    const { listaDeTelas, setListaDeTelas, codigo, setCodigo, setNome, setTela, scanned, setScanned, setAlunos } = useContext(GlobalContext)
    useEffect(() => {
        setAlunos(getAlunos())
        setNome('')
        setScanned(false)
    }, [])

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
                    <Checking />
                }
            </View>
        }
    />
}
