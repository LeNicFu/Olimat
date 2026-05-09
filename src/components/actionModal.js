import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context'
import { useContext } from 'react'
import { estiloModal} from '../styles'

export default function ActionModal() {
    const { visibleModal, setVisibleModal, message } = useContext(GlobalContext)

    return <TouchableOpacity
        style={estiloModal.containerModal1}
        onPress={() => setVisibleModal(false)}
    >
        <TouchableOpacity
            style={estiloModal.containerModal2}
            activeOpacity={1}
            onPress={() => setVisibleModal(false)}
        >
            <View style={estiloModal.containerModal3}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
                    {message}
                </Text>
            </View>
        </TouchableOpacity>
    </TouchableOpacity>
}
