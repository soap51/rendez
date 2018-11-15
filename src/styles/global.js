import {PixelRatio , StyleSheet} from 'react-native'
<<<<<<< HEAD
import { vw, vh } from 'react-native-viewport-units';

=======
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
>>>>>>> c6ec1b3b1609f138f33a92d61fbde0491330455c
let fontSize = 30
let fontHeader = 40
let fontSecondary = 20
let fontParagraph = 18
let size = 60
let sizeOfCircle = 120
let paddingSize = 20
let marginSize = 20
if(PixelRatio.get() < 3){
    fontSize = 12
    size = 30
    sizeOfCircle = 15*vw
    
}
if(PixelRatio.get()> 3){
    paddingSize = 50
}

export const Font= {
    fontSize,
    fontHeader,
    fontSecondary,
    fontParagraph
} 
export const Space ={
    paddingSize,
    marginSize
}
export const Circle ={
    sizeOfCircle,
    borderRadius : (sizeOfCircle*vw)/2
}


export const SizePX = size
