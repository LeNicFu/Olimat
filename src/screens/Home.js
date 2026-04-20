import { View, Text, ImageBackground } from 'react-native'
import estilos from '../styles'
import { useContext, useEffect } from 'react'
import olimat from '../../assets/olimat.png'
import { GlobalContext } from '../context'
import Navegar from '../botoes/navegar'
import Apagar from '../botoes/apagar'
import { CriarTabelaAlunos, getAlunos } from '../data'


export default function Home() {
  const { tela, setTela, listaDeTelas, setListaDeTelas } = useContext(GlobalContext)
  //console.log('LISTA DE TELAS:', listaDeTelas)

  useEffect(() => {
    setListaDeTelas(['home'])
    CriarTabelaAlunos()
    // console.log('Lista de alunos', getAlunos())
  }, [])

  async function limpaNome() {
    await setNome('')
  }

  return (
    <View style={estilos.newContainer}>
      <View style={{ height: 60, width: '100%', backgroundColor: '#20DCE6', justifyContent: 'flex-end' }}>
        <View style={{ justifyContent: 'flex-end', paddingBottom: 3, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            OLIMAT 2026
          </Text>
        </View>
      </View>
      <View style={estilos.containerHome}>
        <ImageBackground source={olimat} resizeMode='cover' style={estilos.olimat}>
          <Navegar
            proximaTela={'scanner'}
            titulo={'Ler código'}
          />
          <Navegar
            proximaTela={'lista'}
            titulo={'Lista'}
          />
          <Navegar
            proximaTela={'enviar'}
            titulo={'Enviar a lista'}
          />
          <Apagar
            proximaTela={'apagarLista'}
            titulo={'Apagar a lista'}
          />
        </ImageBackground>
      </View>
    </View>
  )
}//66