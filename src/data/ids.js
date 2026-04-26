import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ids = require('./paginaAno.json')

export function SchoolId(code) {
    for(let i = 0; i < ids.length; i++) {
        const escola = ids[i]
        const Ano6a = escola.Ano6a
        const Ano9b = escola.Ano9b
        if (code >= Ano6a && code <= Ano9b) {
            return escola.NomeDaEscola
        }
    }
    return 'O código escaneado não pertence a nenhuma escola cadastrada!'
}

export default function Teste() {
    return <TouchableOpacity
        style={styles.container}
        // onPress={() => console.log(ids[0], '\n_________________________________________')}
        onPress={() => console.log(SchoolId(13225))}
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