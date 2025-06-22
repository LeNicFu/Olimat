import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')
    const [tela, setTela] = useState('home')
    const [listaDeTelas, setListaDeTelas] = useState(['home'])
    
    return (
        <GlobalContext.Provider value={{
            id, setId,
            tela, setTela,
            nome, setNome,
            codigo, setCodigo,
            listaDeTelas, setListaDeTelas,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}