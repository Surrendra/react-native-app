import React, { Component } from "react";
import { Text, View,StyleSheet,Image,Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cartImage from "../../assets/images/cart-icon.png";


const PositionReact = ({ route, navigation }) => {
    const { ItemId, Name } = route.params;
    return (
        <SafeAreaView>
            <View style={cartStyle.box}>
                <View style={cartStyle.wrapper}>
                    <Image source={cartImage} style={cartStyle.icon} />
                    <Text style={cartStyle.notif}>{ItemId}</Text>
                </View>
                <Text style={cartStyle.text}>Keranjang Belanja {Name}</Text>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
                <Button
                    title="ListView"
                    onPress={() => navigation.navigate('DashboardScreen')}
                />
            </View>
        </SafeAreaView>
    );
}

const cartStyle = StyleSheet.create({
    notif:{
        position:'absolute',
        fontSize:17,
        top:5,
        left:10,
        width:30,
        height:30,
        borderWidth:1,
        backgroundColor:'green',
        borderColor:'green',
        color:'white',
        borderRadius:20,
        padding:4,
    },
    box: {
        alignItems: 'center', 
        flexDirection:'column',
    },
    icon:{
        width:92,
        height:92,
    },
    wrapper:{
        borderWidth:1,
        borderRadius:125/2,
        width: 125,
        height: 125,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        marginTop:20
    }
})

export default PositionReact;