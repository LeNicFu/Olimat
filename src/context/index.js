import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [codigo, setCodigo] = useState('')
    const [tela, setTela] = useState('home')
    const [escola, setEscola] = useState('')
    const [alunos, setAlunos] = useState([])
    const [scanned, setScanned] = useState(false)
    const [listaDeTelas, setListaDeTelas] = useState(['home'])
    const [checkingSchool, setCheckingSchool] = useState(false)
    const [fatorDeOrdenacao, setFatorDeOrdenacao] = useState(null)

    const [test, setTest] = useState(0)    

    return (
        <GlobalContext.Provider value={{
            id, setId,
            tela, setTela,
            nome, setNome,
            codigo, setCodigo,
            escola, setEscola,
            alunos, setAlunos,
            scanned, setScanned,
            listaDeTelas, setListaDeTelas,
            checkingSchool, setCheckingSchool,
            fatorDeOrdenacao, setFatorDeOrdenacao,

            test, setTest
        }}>
            {children}
        </GlobalContext.Provider>
    )
}