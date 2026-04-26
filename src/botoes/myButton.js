import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function MyButton({ onPress, icon, color }) {
    return <TouchableOpacity style={styles.button}
        onPress={onPress}
    >
        <Entypo name={icon} size={50} color={color? color: 'green'} />
    </TouchableOpacity>
}

export function ButtonList({ onPress, text }) {
    return <TouchableOpacity style={styles.buttonList}
    onPress={onPress}
    >
        <Text style={styles.textList}>
            {text}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonList: {
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginLeft: 10
    },
    textList: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginLeft: 10
    }
})