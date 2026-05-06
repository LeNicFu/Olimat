import { Text, View } from 'react-native'
import Screen from '../build/Screen'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { getAlunos } from '../data'
import { checkCode, checkSchool, School } from '../Checking'

export default function Scanner() {
    const { codigo, setCodigo, setNome, setTela, scanned, setScanned, alunos, setAlunos, setCheckingSchool, escola, setCheckingCode, setErro, erro } = useContext(GlobalContext)

    useEffect(() => {
        setAlunos(getAlunos())
        setNome('')
        setScanned(false)
    }, [])

    useEffect(() => {
        if (scanned) {
            const resultado = School(codigo)
            if (resultado) {
                if (escola.length > 0) {
                    setCheckingSchool(checkSchool(escola, codigo))
                    setCheckingCode(checkCode(alunos, codigo))
                } else {
                    setCheckingCode(checkCode(alunos, codigo))
                    setCheckingSchool(true)
                }
                setTela('scanned')
            } else {
                setErro(true)
                setTela('scanned')
            }
        }
    }, [scanned])

    // useEffect(() => {
    //     if (scanned) {
    //         School(codigo).then(resultado => {
    //             if (resultado) {
    //                 if (escola.length > 0) {
    //                     checkSchool(escola, codigo).then(resultado => {
    //                         setCheckingSchool(resultado)
    //                         // setTela('scanned')
    //                     })
    //                     checkCode(alunos, codigo).then(resultado => {
    //                         setCheckingCode(resultado)
    //                         setTela('scanned')
    //                     })
    //                 } else {
    //                     checkCode(alunos, codigo).then(resultado => {
    //                         setCheckingCode(resultado)
    //                         setTela('scanned')
    //                     })
    //                     setCheckingSchool(true)
    //                 }
    //             } else {
    //                 setErro(true)
    //             }
    //         })
    //     }
    // }, [scanned])

    const handleCodeScanned = (code) => {
        if (code.data.length > 0) {
            setCodigo(code.data)
            setScanned(true)
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
                    <View>
                        <Text>Checking...</Text>
                    </View>
                }
            </View>
        }
    />
}
