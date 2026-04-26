import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [codigo, setCodigo] = useState('')
    const [tela, setTela] = useState('home')
    const [listaDeTelas, setListaDeTelas] = useState(['home'])
    const [fatorDeOrdenacao, setFatorDeOrdenacao] = useState(null)
    
    return (
        <GlobalContext.Provider value={{
            id, setId,
            tela, setTela,
            nome, setNome,
            codigo, setCodigo,
            listaDeTelas, setListaDeTelas,
            fatorDeOrdenacao, setFatorDeOrdenacao
        }}>
            {children}
        </GlobalContext.Provider>
    )
}