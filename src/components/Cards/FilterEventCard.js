import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import { Space, Font } from '../../styles/global';
import PropTypes from 'prop-types'
import { vw, vh } from 'react-native-viewport-units';
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
            
              
           <View style = {{ 
           
            width : 120*vw,
            marginLeft : -1*vw,
            marginTop : -6*vw,
       
           }}> 
         
        <View style={{
                borderRadius : 10,
                borderWidth : 1.8*vw,
                borderColor : "#F59191",
                width : 70*vw,
                display : "flex",
                flexDirection : "row",
                marginLeft : 0.7*vw,
                justifyContent : "space-around",
                backgroundColor : "white",
                marginBottom :2*vw,
                marginTop : 1*vw
            }}>
            <View style = {{flexDirection : "column", width : 70*vw}}>
              <Text style = {{textAlign : "center",width : 68*vw,fontWeight :"bold",
            backgroundColor :"#F59191",fontSize : 6*vw,marginTop : -1*vw,marginLeft :1*vw}}>
            CURRENT
        </Text>  
        <View style = {{ flexDirection : "row",  flex : 1,height : 5*vw}}>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(0)} style={typeActivity == 0? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    backgroundColor : "#FFE4E4",
                    borderWidth : 2*vw,
                    width : 5*vw
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
                    <Text style={{
                        fontSize : Font.fontParagraph / 4*vw,
                        fontWeight : "bold"
                    }}>My Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(1)} style={typeActivity == 1? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    backgroundColor : "#FFE4E4",
                    borderWidth : 2*vw,
                    height : 10*vw,
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
                    <Text style={{
                        fontSize : Font.fontParagraph / 4*vw,
                        fontWeight : "bold"
                    }}>Joined</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
           
                
       
        </View>
       
        )
    }
}
FilterEventCard.propTypes = {
    typeActivity : PropTypes.number.isRequired,
    _onChangeActivity : PropTypes.func.isRequired
}
export default FilterEventCard