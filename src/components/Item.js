import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,Image, TouchableOpacity } from "react-native";
import macbook from "../../assets/images/macbook.jpeg"

const value = 0;

const updateTotalQty = (props) => {
    props.decreeTotalProduct;
    value = value + 1;
}

const Item = (props) => {
    const [totalQty,setTotalQty] = useState(0);
    return (
        <View>
            <View style={{ 
                marginTop:10,
                flexDirection: 'row',
                flex:2,
                justifyContent: 'space-around',
                width:327,
                height:110,
                marginBottom:10,
                marginHorizontal:24,
             }}>
                {/* <View style={{ 
                    width:156,
                    flexDirection:'column',
                    justifyContent:'space-around',
                    alignItems:'flex-start',
                 }}>
                    <Text style={{ 
                        fontSize:16,
                        lineHeight:17.6,
                        color:'#424347',
                     }}>Scarf</Text>
                </View> */}
                <View style={{ 
                    width:164,
                    height: 100,
                    // backgroundColor:'grey'
                 }}>
                    <Text style={{ 
                        fontSize:16,
                        color:'#424347',
                        lineHeight:18,
                        // fontFamily: 'Graphik',
                        fontStyle:'normal'
                     }}>{props.name}</Text>
                     <Text style={{ 
                        color:'#BBBBBB',
                        fontSize:13,
                        lineHeight:14,
                        marginTop:6,
                      }}>
                        {props.category_name}
                     </Text>
                     <View style={{ 
                        flexDirection:'row',
                        marginTop:5
                      }}>
                        <Text style={{ 
                            marginRight:20,
                            fontSize:15,
                            lineHeight:17
                         }}>{props.price}</Text>
                        <Text style={{ 
                            fontSize: 15,
                            lineHeight: 17,
                            color:'#8688BC'
                         }}>In Stock</Text>
                     </View>
                     <View style={{ 
                        marginTop: 10,
                        flexDirection: 'row',
                        flex: 3,
                        justifyContent: 'space-between',
                      }}>
                        <View style={{
                            backgroundColor: '#BBBBBB',
                            width: 94,
                            height: 32,
                            borderRadius: 5,
                            flexDirection: 'row',
                            flex: 3,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            marginRight:10,
                        }}>
                            <TouchableOpacity onPress={props.decreeTotalProduct}>
                                <Text style={style.navigation}> - </Text>
                            </TouchableOpacity>
                            <Text style={style.navigation}>{totalQty}</Text>
                            <TouchableOpacity onPress={props.updateTotalProduct}>
                                <Text style={style.navigation}> + </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ 
                            backgroundColor: '#BBBBBB',
                            width: 32,
                            height: 32,
                            borderRadius: 5,
                         }}>
                            
                        </View>
                     </View>
                </View>
                <Image style={{ 
                    width: 120,
                    height: 110,
                    borderRadius:10,
                 }} source={macbook}/>
            </View>
            <Line/>
        </View>
    )
}

const style = StyleSheet.create({
    navigation:{
        color:'grey',
        fontWeight:'bold',
        
    }
})

const Line = () => {
    return (
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                alignSelf:'center',
                width:200
            }}
        />
    )
}

export default Item;

