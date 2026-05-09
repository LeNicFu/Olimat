import { Text, View } from 'react-native'
import { GlobalContext } from '../context'
import { useContext } from 'react'

export default function Ano({ codigo }) {
    const { dataSchool } = useContext(GlobalContext)

    const ano = () => {
        if (codigo <= dataSchool.Ano6b) {
            return '6º'
        } else if (codigo <= dataSchool.Ano7b) {
            return '7º'
        } else if (codigo <= dataSchool.Ano8b) {
            return '8º'
        } else {
            return '9º'
        }
    }

    return <View>
        <Text style={{ fontSize: 14, lineHeight: 12, paddingHorizontal: 5, fontWeight: 'bold' }}>
            {ano()}
        </Text>
    </View>


}


export const  generoCrase = (palavra) => {
    const feminino = ['Escola', 'Cooperativa', 'Escolinha']
    const masculino = ['Grupo', 'Educandário', 'Colégio', 'Instituto', 'Centro', 'Empreendimento', 'Cândido', 'CAIC']
    if (feminino.includes(palavra.split(' ')[0])) {
        return 'à'
    } else if (masculino.includes(palavra.split(' ')[0])) {
        return 'ao'
    } else {
        return 'ao(à)'
    }
}