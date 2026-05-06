import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [codigo, setCodigo] = useState('')
    const [escola, setEscola] = useState('')
    const [alunos, setAlunos] = useState([])
    const [tela, setTela] = useState('loading')
    const [scanned, setScanned] = useState(false)
    const [listaDeTelas, setListaDeTelas] = useState(['home'])
    const [fatorDeOrdenacao, setFatorDeOrdenacao] = useState(null)
    
    const [erro, setErro] = useState(false)
    const [checkingCode, setCheckingCode] = useState(false)
    const [checkingSchool, setCheckingSchool] = useState(false)
    

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
            fatorDeOrdenacao, setFatorDeOrdenacao,
            
            erro, setErro,
            checkingCode, setCheckingCode,
            checkingSchool, setCheckingSchool,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}