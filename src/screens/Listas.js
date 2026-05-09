import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import { View } from 'react-native'
import { ButtonList } from '../botoes/myButton'
import Screen from '../build/Screen'
import { getAlunos } from '../data'
import { School } from '../Checking'
import codigoEscolaAno from '../data/paginaAno.json'

export default function Listas() {
    const { listaDeTelas, setListaDeTelas, setTela, setFatorDeOrdenacao, setEscola, alunos, setAlunos, escola, setDataSchool, dataSchool } = useContext(GlobalContext)

    useEffect(() => {
        setAlunos(getAlunos())
        setDataSchool(codigoEscolaAno.find(item => item.NomeDaEscola === escola))
    }, [])

    return <Screen
        topBarTitle={'Ordenar'}
        body={
            <View style={{ backgroundColor: '#00AEE7', flex: 1, width: '100%', justifyContent: 'center' }}>
                <View style={{ height: '80%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <ButtonList text={'Mais recentes'} onPress={() => [setFatorDeOrdenacao('id'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`])]} />
                    <ButtonList text={'Ordem alfabética'} onPress={() => [setFatorDeOrdenacao('nome'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`])]} />
                    <ButtonList text={'Código'} onPress={() => [setFatorDeOrdenacao('codigo'), setTela(`listaOrdenada`), setListaDeTelas([...listaDeTelas, `listaOrdenada`])]} />
                </View>
            </View>
        }
    />
}
