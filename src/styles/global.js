import {PixelRatio , StyleSheet} from 'react-native'

let fontSize = 30
let size = 60
if(PixelRatio.get() < 2){
    fontSize = 20
    size = 10
}

export const Font= {
    fontSize
} 


export const SizePX = size