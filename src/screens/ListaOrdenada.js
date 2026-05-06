import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { GlobalContext } from '../context'
import Screen from '../build/Screen'

export default function ListaOrdenada() {
    const { listaDeTelas, setListaDeTelas, setTela, fatorDeOrdenacao, alunos, escola } = useContext(GlobalContext)

    Ordenadar()

    function Ordenadar() {
        if (fatorDeOrdenacao === 'nome') {
            alunos.sort(function (a, b) {
                return a.nome.localeCompare(b.nome, 'pt', { sensitivity: 'base' })
            })
        } else if (fatorDeOrdenacao === 'id') {
            alunos.sort(function (a, b) {
                if (a.id > b.id) {
                    return -1
                }
                if (a.id < b.id) {
                    return 1
                }
                if (a.id = b.id) {
                    return 0
                }
            })
        } else if (fatorDeOrdenacao === 'codigo') {
            alunos.sort(function (a, b) {
                return Number(a.codigo) - Number(b.codigo)
            })
        }
    }

    const { setCodigo, setNome, setId } = useContext(GlobalContext)
    async function editar(c, n, i) {
        await (setCodigo(c), setNome(n), setId(i))
    }

    function EstiloLista(codigo, nome, id) {
        return <TouchableOpacity style={estilo.container}
            onPress={() => [editar(codigo, nome, id), setTela('editar'), setListaDeTelas([...listaDeTelas, 'editar'])]}
        >
            <Text style={estilo.textoNome}>
                {nome}
            </Text>
            <Text style={estilo.textoCodigo}>
                {codigo}
            </Text>
        </TouchableOpacity>
    }

    return <Screen
        topBarTitle={'Alunos registrados'}
        body={
            <FlatList
                style={{ backgroundColor: '#00AEE7', width: '100%' }}
                data={alunos}
                keyExtractor={(aluno) => aluno.id.toString()}
                renderItem={({ item }) => EstiloLista(item.codigo, item.nome, item.id)}
                ListHeaderComponent={() => {
                    return <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                        <Text style={estilo.textoEscola}>
                            {escola}
                        </Text>
                        <Text style={{fontSize: 18, lineHeight: 24, fontWeight: '500'}}>
                            Total:   {alunos.length}
                        </Text>
                    </View>
                }}
                ListFooterComponent={() => <View style={{ height: 40 }} />}
            />
        }
    />
}

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
    textoEscola: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textoCodigo: {
        fontSize: 17,
        lineHeight: 23,
        fontWeight: '500'
    }
})