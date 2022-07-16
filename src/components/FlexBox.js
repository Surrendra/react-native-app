import React from "react";
import { Component } from "react";
import { Text, View, Image } from "react-native"

class FlexBox extends Component{
    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 50, height: 40 }}>
                        <Text style={{ color: 'white' }}>Biru</Text>
                    </View>
                    <View style={{ backgroundColor: 'green', width: 50, height: 30 }}></View>
                    <View style={{ backgroundColor: 'yellow', width: 50, height: 20 }}></View>
                </View>
                <View style={{ flexDirection:'row',justifyContent:'space-around',marginTop:10 }}>
                    <Text>Home</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Community</Text>
                </View>
                <View style={{ 
                    flexDirection:'row',
                    alignItems:'center',
                    marginTop:20
                 }}>
                    <Image source={{ uri:'https://yt3.ggpht.com/ytc/AMLnZu-W1heQrzAcrhKvohCg9_1s1BuaoptbZzRCTZTtUWs=s176-c-k-c0x00ffffff-no-rj'}} style={{
                        width:100,
                        height:100,
                        borderRadius:50,
                        marginRight:14
                    }} 
                    />
                    <View style={{ alignItem:'center',fontWeight:'bold' }}>
                        <Text style={{ fontSize:20 }}>Prawito Hudoro</Text>
                        <Text>22K subscribers</Text>
                    </View>
                </View>
            </View>
  
        )
    }
}

export default FlexBox;