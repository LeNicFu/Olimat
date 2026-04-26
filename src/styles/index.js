import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    newContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerBotao: {
        padding: 20
    },
    containerConfereNumero: {
        backgroundColor: 'rgb(0,136,136)',
        width: '90%',
        borderRadius: 15
    },
    confereNumero: {
        fontSize: 25,
        textAlign: 'center'

    },
    nome: {
        height: 80,
        paddingBottom: 40,
        fontSize: 30
    },
    botao: {
        backgroundColor: '#ec1f26',
        width: 200,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 12
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    olimat: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    botaoExcluir: {
        backgroundColor: 'black',
        width: 200,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ec1f26',
        borderWidth: 4,
        borderRadius: 12,
        marginTop: 120
    },
    containerBotaoExcluir: {
        marginTop: 10
    }
})

export const estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        backgroundColor: '#BCB9BA',
        marginHorizontal: 4,
        marginVertical: 2,
        borderRadius: 8
    },
    textoNome: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '500'
    },
    textoCodigo: {
        fontSize: 17,
        lineHeight: 23,
        fontWeight: '500'
    }
})