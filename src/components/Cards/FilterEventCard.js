import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import { Space, Font } from '../../styles/global';
import PropTypes from 'prop-types'
class FilterEventCard extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            typeActivity : 0,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({typeActivity : nextProps.typeActivity})
    }
    render(){
        const {typeActivity} = this.state
        return(
            
              
            
        <View style={{
                borderRadius : 7,
                borderWidth : 3,
                borderColor : "#F59191",
              
                display : "flex",
                flexDirection : "row",
                justifyContent : "space-around",
                backgroundColor : "white",
                marginBottom :0
            }}>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(0)} style={typeActivity == 0? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    borderRadius : 5,
                    backgroundColor : "#FFE4E4",
                    borderWidth : 3
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
                    <Text style={{
                        fontSize : Font.fontParagraph / 1.5,
                        fontWeight : "bold"
                    }}>Joined</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(1)} style={typeActivity == 1? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    borderRadius : 5,
                    backgroundColor : "#FFE4E4",
                    borderWidth : 3
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
                    <Text style={{
                        fontSize : Font.fontParagraph / 1.5,
                        fontWeight : "bold"
                    }}>My Activity</Text>
                </TouchableOpacity>
            </View>
           
        )
    }
}
FilterEventCard.propTypes = {
    typeActivity : PropTypes.number.isRequired,
    _onChangeActivity : PropTypes.func.isRequired
}
export default FilterEventCard