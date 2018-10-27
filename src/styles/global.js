import {PixelRatio , StyleSheet} from 'react-native'

let fontSize = 30
let fontHeader = 40
let fontSecondary = 20
let fontParagraph = 18
let size = 60
if(PixelRatio.get() < 3){
    fontSize = 12
    size = 30
}

export const Font= {
    fontSize,
    fontHeader,
    fontSecondary,
    fontParagraph
} 


export const SizePX = size