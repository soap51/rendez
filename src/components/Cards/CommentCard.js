import React from 'react'
import {View , Text , StyleSheet , Image} from 'react-native'
import { Space , Circle , Font } from '../../styles/global';

import Proptypes from 'prop-types'
class CommentCard extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            position : props.position ? props.position : 0,
            comment : props.comment ? props.comment : ""
        }
    }
    render(){
        const {position , comment} = this.state
        return( 
           <View >
                {position == 0?
                    <View style={styles.container}>
                        <View style={{
                            flex : 1
                        }}>
                            <Text style={{textAlign : "left"}}>
                                {comment}
                            </Text>
                        </View>
                    </View>
                    :
                    <View style={styles.container}>
                        <View style={{
                            flex : 1
                        }}>
                            <Text style={{textAlign : "right"}}>
                                {comment}
                            </Text>
                        </View>
                    </View>
                }
                
               
           </View>
        )
    }
}
CommentCard.propTypes ={
    position : Proptypes.number,
    comment : Proptypes.string
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        padding : Space.paddingSize,
        borderRadius : 17,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        margin : Space.marginSize
    },
    imageContainer : {
        flex : 0.2,
        width : Circle.sizeOfCircle,
        height  :Circle.sizeOfCircle,
        borderRadius : Circle.borderRadius
    }
})
export default CommentCard