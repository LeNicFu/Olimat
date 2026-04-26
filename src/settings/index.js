import { Dimensions } from 'react-native'

export const heightScreen = Math.floor(Dimensions.get('window').height)
export const widthScreen = Math.floor(Dimensions.get('window').width)

const lateral = 20
const lado = (widthScreen - 2 * lateral) / 12.5

export const quadrado = {
    lado: lado,
    linha: 2
}

export const margem = {
    lateral: lateral,
    superior1: .8 * lateral,
    superior2: 1 * lateral + 22.4 * lado
}

export const distanceTop = 45