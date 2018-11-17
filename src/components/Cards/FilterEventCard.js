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
<<<<<<< HEAD
                width : 70*vw,
                height : 20*vw,
=======
                width : 34*vw,
                height : 14*vw,
>>>>>>> 769ba40587945897d5b0ddbfc94d65b4767a33ff
                display : "flex",
                flexDirection : "row",
                marginLeft : 0.7*vw,
                justifyContent : "space-around",
                backgroundColor : "white",
                marginBottom :2*vw,
                marginTop : 1*vw
            }}>
<<<<<<< HEAD
            <View style = {{flexDirection : "column", width : 65*vw}}>
              <Text style = {{textAlign : "center",width : 65*vw,fontWeight :"bold",
            backgroundColor :"#F59191",fontSize : 6*vw,marginTop : -1.5*vw}}>
=======
            <View style = {{flexDirection : "column", width : 32*vw,borderWidth : 1*vw,borderColor : "#F59191",}}>
              <Text style = {{textAlign : "center",width : 30*vw,fontWeight :"bold",marginTop : -2*vw,
            backgroundColor :"#F59191",}}>
>>>>>>> 769ba40587945897d5b0ddbfc94d65b4767a33ff
            CURRENT
        </Text>  
        <View style = {{ flexDirection : "row",  flex : 1,height : 5*vw}}>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(0)} style={typeActivity == 0? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    backgroundColor : "#FFE4E4",
<<<<<<< HEAD
                    borderWidth : 2*vw,
                    width : 5*vw
=======
                    borderWidth : 0.1*vw,
                    height : 6*vw,
>>>>>>> 769ba40587945897d5b0ddbfc94d65b4767a33ff
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
<<<<<<< HEAD
                    <Text style={{
                        fontSize : Font.fontParagraph / 4*vw,
=======
                    <Text style={{  flex : 1,
                        fontSize : Font.fontParagraph / 1.6,
>>>>>>> 769ba40587945897d5b0ddbfc94d65b4767a33ff
                        fontWeight : "bold"
                    }}>My Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(1)} style={typeActivity == 1? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : "#F59191",
                    backgroundColor : "#FFE4E4",
                    borderWidth : 0.1*vw,
                    height : 6*vw,
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
<<<<<<< HEAD
                    <Text style={{
                        fontSize : Font.fontParagraph / 4*vw,
=======
                    <Text style={{  flex : 1,
                        fontSize : Font.fontParagraph / 1.6,
>>>>>>> 769ba40587945897d5b0ddbfc94d65b4767a33ff
                        fontWeight : "bold"
                    }}>Joined</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
           
                
<<<<<<< HEAD
       
=======
        <View style={{
            borderRadius : 10,
            width : 34*vw,
            height : 14*vw,
            borderWidth : 1.8*vw,
            borderColor : "rgb(173,173,173)",
            marginLeft : 36*vw,
            display : "flex",
            flexDirection : "row",
            justifyContent : "space-around",
            backgroundColor : "white",
            marginBottom :3*vw,
            marginTop : -14*vw,
        }}>
         <View style = {{flexDirection : "column", width : 32*vw,borderWidth : 1*vw,borderColor :  "rgb(173,173,173)",}}>
              <Text style = {{textAlign : "center",width : 30*vw,fontWeight :"bold",marginTop : -2*vw,
            backgroundColor : "rgb(173,173,173)",}}>
            HISTORY
        </Text>  
        <View style = {{ flexDirection : "row",  flex : 1,}}>
            <TouchableOpacity onPress={()=>this.props._onChangeActivity(2)} style={typeActivity == 2? {
                flex : 1,
                justifyContent : "center",
                alignItems :"center",
                borderColor :  "rgb(173,173,173)",
                backgroundColor :  "rgb(223,219,218)",
                borderWidth : 0.1*vw,
                height : 6*vw,
            } : {
                flex : 1,
                justifyContent : "center",
                alignItems :"center"
            }}>
                <Text style={{  flex : 1,
                    fontSize : Font.fontParagraph / 1.6,
                    fontWeight : "bold",
                }}>My Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props._onChangeActivity(3)} style={typeActivity == 3? {
                flex : 1,
                justifyContent : "center",
                alignItems :"center",
                borderColor :  "rgb(173,173,173)",
                backgroundColor :  "rgb(223,219,218)",
                borderWidth : 0.1*vw,
                height : 6*vw,
            } : {
                flex : 1,
                justifyContent : "center",
                alignItems :"center"
            }}>
                <Text style={{  flex : 1,
                    fontSize : Font.fontParagraph / 1.6,
                    fontWeight : "bold"
                }}>Joined</Text>
            </TouchableOpacity>
             
            </View>
        </View>
            </View>
>>>>>>> 769ba40587945897d5b0ddbfc94d65b4767a33ff
        </View>
       
        )
    }
}
FilterEventCard.propTypes = {
    typeActivity : PropTypes.number.isRequired,
    _onChangeActivity : PropTypes.func.isRequired
}
export default FilterEventCard