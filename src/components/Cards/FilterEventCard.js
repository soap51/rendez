import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import { Space, Font } from '../../styles/global';
import PropTypes from 'prop-types'
import { vw, vh } from 'react-native-viewport-units';
class FilterEventCard extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            typeActivity : 1,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({typeActivity : nextProps.typeActivity})
    }
    render(){
        const {typeActivity} = this.state
        return(
            
              
           <View style = {{ 
           
            width : 70*vw,
            justifyContent : "center",
            marginLeft :'auto',
            marginRight : 'auto',
            marginTop : -6*vw,
       
           }}> 
         
        <View style={{
                borderRadius : 10,
                borderWidth : 1.8*vw,
                borderColor : "#F59191",
                width : 70*vw,
                height : 16*vw,
                display : "flex",
                flexDirection : "row",
                justifyContent : "center",
                alignItems :"center",
                marginLeft :'auto',
                marginRight : 'auto',
                backgroundColor : "white",
                marginBottom :2*vw,
                marginTop : 5*vw
            }}>
            <View style = {{flexDirection : "column", width : 70*vw,borderWidth : 1*vw,borderColor : "#F59191",}}>
              <Text style = {{textAlign : "center",width : 68*vw,fontWeight :"bold",marginTop : -2*vw,
            backgroundColor :"#F59191",fontSize : 5*vw}}>
            Activity
        </Text>  
        <View style = {{ flexDirection : "row",  flex : 1,height : 5*vw}}>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(1)} style={typeActivity == 1? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : 'red',
                    backgroundColor : "#FFE4E4",
                    borderWidth : 0.5*vw,
                    
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
                    <Text style={{  flex : 1,
                        fontSize : Font.fontParagraph*0.2*vw,
                        fontWeight : "bold"
                    }}>My Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props._onChangeActivity(0)} style={typeActivity == 0? {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center",
                    borderColor : 'red',
                    backgroundColor : "#FFE4E4",
                    borderWidth : 0.5*vw,
                    
                } : {
                    flex : 1,
                    justifyContent : "center",
                    alignItems :"center"
                }}>
                    <Text style={{  flex : 1,
                        fontSize : Font.fontParagraph*0.2*vw,
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