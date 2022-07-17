import React, { Component } from "react";
import { View, TextInput,Image } from "react-native";


class InputGroupText extends Component {
    render() {
        return (
            <View style={{ 
                flexDirection:'row',
                borderWidth: 1,
                borderRadius:20,
                justifyContent:'flex-end'
             }}>
                <View style={{ 
                    flexDirection:'column',
                    // justifyContent:'center',
                    // marginto
                 }}>
                    <Image source={this.props.icon} style={{
                        // backgroundColor:'grey',
                        marginTop:4,
                        marginLeft:4,
                        width: 40,
                        height: 40,
                    }} />
                </View>
                <TextInput 
                secureTextEntry={this.props.secureTextEntry}
                style={{ 
                    // backgroundColor:'grey',
                    height: 55,
                    width: 280,
                    borderRadius: 20,
                    borderColor: '#2C447D',

                 }} />
            </View>
        )
    }
}

InputGroupText.defaultProps = {
    secureTextEntry:false
}

export default InputGroupText;
