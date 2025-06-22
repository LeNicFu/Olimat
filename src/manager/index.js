import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import Home from '../screens/Home'
import Nome from '../screens/Nome'
import Lista from '../screens/Lista'
import Scanner from '../screens/Scanner'
import Enviar from '../screens/Enviar'
import ApagarLista from '../screens/ApagarLista'
import Editar from '../screens/Editar'
import EditarNome from '../screens/EditarNome'

export default function Manager() {
    const { tela, listaDeTelas } = useContext(GlobalContext)

    if (tela === 'home') {
        return <Home />
    }
    if (tela === 'scanner') {
        return <Scanner />
    }
    if (tela === 'nome') {
        return <Nome />
    }
    if (tela === 'lista') {
        return <Lista />
    }
    if (tela === 'enviar') {
        return <Enviar />
    }
    if (tela === 'apagarLista') {
        return <ApagarLista />
    }
    if (tela === 'editar') {
        return <Editar />
    }
    if (tela === 'editarNome') {
        return <EditarNome />
    }
}