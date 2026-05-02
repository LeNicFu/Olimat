import { View } from 'react-native'
import { GlobalContext } from '../context'
import { useContext } from 'react'

export default function SchoolCheck() {
    const { codigo } = useContext(GlobalContext)

    const check = (school1, school2) => {
        if (school1 === school2) {
            return true
        }
        return false
    }

    
    return <View>

    </View>
}