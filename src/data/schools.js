import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ids = require('./paginaAno.json')

export function School(code) {
    for (let i = 0; i < ids.length; i++) {
        const escola = ids[i]
        const Ano6a = escola.Ano6a
        const Ano9b = escola.Ano9b
        if (code >= Ano6a && code <= Ano9b) {
            return escola.NomeDaEscola
        }
    }
    return false
    // 'O código escaneado não pertence a nenhuma escola cadastrada. Provavelmente ocorreu algum erro. Escanei novamente.'
}

export default function Teste() {
    return <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(School(3284))}
    >
        <Text style={styles.label}>
            Teste
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },
    label: {
        fontSize: 26,
        fontWeight: 'bold'
    }
})