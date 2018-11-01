import React from 'react'
import {TouchableOpacity  , Text , StyleSheet , View  } from 'react-native'
import {Font , Space} from '../../styles/global'
import Proptypes from 'prop-types'
const styles = StyleSheet.create({
    container : {
        
        borderRadius : 17,
        backgroundColor : "#4D4D4D",
        flexDirection : "row"
    },
    
})
class JoinOption extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            joined : props.joined ? true : false,
            width : 0
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            joined : nextProps.joined
        })
    }
    render(){
        const {joined , width} = this.state
      
        return(
            <View onLayout={(event)=>this.setState({width : event.nativeEvent.layout.width})}  style={styles.container}>
           
                
                <TouchableOpacity  onPress={()=>this.props.handleJoinEvent()} style={{
                    flex : .5,
                    borderRadius : 17,
                    padding : Space.paddingSize / 4,
                    backgroundColor :!joined ? "#4FF554" : "#FC3355",
                    justifyContent : "center",
                    alignItems : "center",
                    transform : [{ translateX: !joined ? 0: width /2 - Space.paddingSize /4 - 2 }],
                    borderWidth : 2,
                    borderColor : "white"
                }}>
                    <Text style={{
                        textAlign : "center",
                        fontSize : Font.fontParagraph
                    }}>
                        {!joined ? "Let's Join" : "Cancel"}
                    </Text>
                </TouchableOpacity >
               
              
            </View>
               
           
        )
    }
}
JoinOption.propTypes = {
    joined : Proptypes.bool.isRequired,
    handleJoinEvent : Proptypes.func.isRequired
}
export default JoinOption