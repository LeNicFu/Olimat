import { View, Text, ImageBackground, Modal } from 'react-native'
import ActionModal from '../components/actionModal'
import { useContext, useEffect } from 'react'
import olimat from '../../assets/olimat.png'
import { CriarTabelaAlunos } from '../data'
import { GlobalContext } from '../context'
import Navegar from '../botoes/navegar'
import Apagar from '../botoes/apagar'
import estilos from '../styles'

export default function Home() {
  const { setListaDeTelas, setScanned, setErro, alunos, escola, visibleModal } = useContext(GlobalContext)

  useEffect(() => {
    setListaDeTelas(['home'])
    setScanned(false)
    setErro(false)
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
            proximaTela={'listas'}
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
      <Modal
        visible={visibleModal}
        transparent={true}
      >
        <ActionModal />
      </Modal>
    </View>
  )
}//66