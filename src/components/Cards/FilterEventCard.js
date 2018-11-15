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
            
              
           <View style = {{ borderRadius : 0,
           
            width : 100*vw,
            marginLeft : 0*vw,
       
           }}> 
         
        <View style={{
                borderRadius : 10,
                borderWidth : 2.8*vw,
                borderColor : "#F59191",
                width : 30*vw,
                display : "flex",
                flexDirection : "row",
                marginLeft : 0*vw,
                justifyContent : "space-around",
                backgroundColor : "white",
                marginBottom :0*vw,
                marginTop : 5*vw
            }}>
            <View style = {{flexDirection : "column", width : 27*vw}}>
              <Text style = {{textAlign : "center",width : 30*vw,fontWeight :"bold",
            backgroundColor :"#F59191",}}>
            CURRENT
        </Text>  
        <View style = {{ flexDirection : "row",}}>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(0)} style={typeActivity == 0? {
                    flex : 1,
                   
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    borderRadius : 1*vw,
                    backgroundColor : "#FFE4E4",
                    borderWidth : 1*vw
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
                    borderRadius : 1*vw,
                    backgroundColor : "#FFE4E4",
                    borderWidth : 1*vw
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
                </View>
            </View>
           
                
        <View style={{
            borderRadius : 3*vw,
            width : 30*vw,
            borderWidth : 2.8*vw,
            borderColor : "rgb(173,173,173)",
            marginLeft : 35*vw,
            display : "flex",
            flexDirection : "row",
            justifyContent : "space-around",
            backgroundColor : "white",
            marginBottom :10*vw,
            marginTop : -18.2*vw,
        }}>
         <View style = {{flexDirection : "column", width : 27*vw}}>
              <Text style = {{textAlign : "center",width : 30*vw,fontWeight :"bold",
            backgroundColor : "rgb(173,173,173)",}}>
            HISTORY
        </Text>  
        <View style = {{ flexDirection : "row",}}>
            <TouchableOpacity onPress={()=>this.props._onChangeActivity(2)} style={typeActivity == 2? {
                flex : 1,
                justifyContent : "center",
                alignItems :"center",
                borderColor :  "rgb(173,173,173)",
                borderRadius : 3,
                backgroundColor :  "rgb(223,219,218)",
                borderWidth : 1*vw
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
            <TouchableOpacity onPress={()=>this.props._onChangeActivity(3)} style={typeActivity == 3? {
                flex : 1,
                justifyContent : "center",
                alignItems :"center",
                borderColor :  "rgb(173,173,173)",
                borderRadius : 3,
                backgroundColor :  "rgb(173,173,173)",
                borderWidth : 1*vw
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