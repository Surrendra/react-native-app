import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image,Button } from "react-native";
import InputGroupText from "../components/InputGroupText";
import KanalLogo from '../../assets/images/kanal.png';
import UsernameImage from '../../assets/images/username.png';
import PasswordImage from '../../assets/images/password.png';
import AppNavigation from "../AppNavigation";


function Login(AppNavigation) {
    return (
        <SafeAreaView>
            <View style={LoginStyle.page}>
                <View>
                    <Text style={LoginStyle.title}>S E L A M A T  D A T A N G</Text>
                </View>
                <Image source={KanalLogo} style={LoginStyle.logo} />
                <View style={LoginStyle.inputGroup}>
                    {/* <TextInput style={LoginStyle.inputText} /> */}
                    <InputGroupText icon={UsernameImage} />
                    <InputGroupText icon={PasswordImage} secureTextEntry={true} />
                    <Text style={{
                        alignSelf: 'flex-end',
                        color: 'blue',
                    }}>Lupa Kata Sandi ?</Text>
                </View>
                <View style={{
                    marginTop: 76,
                    backgroundColor: 'blue',
                    width: 180,
                    height: 66,
                    alignSelf: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: 40
                }}>
                    <Button
                        style={{
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontFamily: 'SF Pro Display'
                        }}
                        title="MASUK"
                        color="#FFFFFF"
                        // onPress={() => AppNavigation}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const LoginStyle = StyleSheet.create({
    page:{
        flexDirection:'column'
    },
    title:{
        marginTop:110,
        textAlign:'center',
        // fontWeight:'bold',
        color: '#232323',
        fontSize:22,
        marginHorizontal:42
    },
    logo:{
        alignSelf:'center',
        width:236,
        height:260
    },
    inputGroup:{
        // backgroundColor:'grey', 
        flexDirection:'column',
        justifyContent:'space-between',
        alignSelf:'center',
        height:150,
    },
    inputText:{
        width:318,
        height: 55,
        borderRadius:20,
        borderColor:'#2C447D',
        borderWidth: 1,
    }
})



export default Login;