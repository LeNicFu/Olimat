import { ImageBackground, Text, View } from 'react-native'
import olimat from '../../assets/olimat.png'
import estilos from '../styles'
import { useContext, useEffect, useState } from 'react'
import { CriarTabelaAlunos, getAlunos } from '../data'
import { GlobalContext } from '../context'
import { School } from '../Checking'

export default function Loading() {
    const { setAlunos, setEscola, setTela } = useContext(GlobalContext)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const init = async () => {
            await CriarTabelaAlunos()
            const alunosData = await getAlunos()
            setAlunos(alunosData)

            if (alunosData.length > 0) {
                setEscola(School(alunosData[0].codigo))
            }

            setLoaded(true)
        }

        init()
    }, [])

    useEffect(() => {
        if(loaded) {
            setTela('home')
        }
    }, [loaded])

    return <View style={estilos.newContainer}>
        <View style={{ height: 60, width: '100%', backgroundColor: '#20DCE6', justifyContent: 'flex-end' }}>
            <View style={{ justifyContent: 'flex-end', paddingBottom: 3, paddingLeft: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    OLIMAT 2026
                </Text>
            </View>
        </View>
        <View style={estilos.containerHome}>
            <ImageBackground source={olimat} resizeMode='cover' style={estilos.olimat}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    Carregando...
                </Text>
            </ImageBackground>
        </View>
    </View>
}