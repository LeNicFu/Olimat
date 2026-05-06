const ids = require('../data/paginaAno.json')

export const School = (code) => {
    for (let i = 0; i < ids.length; i++) {
        const escola = ids[i]
        const Ano6a = escola.Ano6a
        const Ano9b = escola.Ano9b
        if (code >= Ano6a && code <= Ano9b) {
            return escola.NomeDaEscola
        }
    }
    return false
}

export const checkSchool =  (escola, codigo) => {
    const school =  School(codigo)
    if (escola === school) {
        return true
    }
    return false
}

export const checkCode = (alunos, codigo) => {
    for (let i = 0; i < alunos.length; i++) {
        if (codigo == alunos[i].codigo) {
            return false
        }
    }
    return true
}