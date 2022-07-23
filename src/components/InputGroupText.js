import React, { Component } from "react";
import { View, TextInput,Image } from "react-native";


const InputGroupText = ({ icon, secureTextEntry, ...rest }) =>{
    return (
        <View style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: 'flex-end'
        }}>
            <View style={{
                flexDirection: 'column',
                // justifyContent:'center',
                // marginto
            }}>
                <Image source={icon} style={{
                    // backgroundColor:'grey',
                    marginTop: 4,
                    marginLeft: 4,
                    width: 40,
                    height: 40,
                }} />
            </View>
            <TextInput
                secureTextEntry={secureTextEntry}
                {...rest}
                style={{
                    fontSize: 14,
                    height: 55,
                    width: 280,
                    borderRadius: 20,
                    borderColor: '#2C447D',

                }} />
        </View>
    )
}

InputGroupText.defaultProps = {
    secureTextEntry:false
}

export default InputGroupText;
