import React from "react";
import { View,Text, ScrollView,StyleSheet,SafeAreaView } from "react-native";
import Item from "../components/Item";

const ItemList = () => {
    return (
        <SafeAreaView>
            <View style={{
                width: 375,
                height: 192,
                flexDirection: 'column',
                // flex: 2,
                justifyContent: 'flex-start',
                alignContent: 'space-around',
                marginHorizontal: 28,
                // position: 'relative',
                // backgroundColor: 'grey'
            }}>
                <Text style={{
                    marginTop: 99,
                    fontSize: 40,
                    lineHeight: 39,
                    // backgroundColor:'grey'
                }}>
                    Cart
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 6,
                    flex: 3,
                }}>
                    <Text style={{
                        color: '#BBBBBB',
                        fontSize: 13,
                        lineHeight: 14,
                        width: 160,
                        // backgroundColor:'grey',
                    }}>
                        3 Item
                    </Text>
                    <Text style={style.TextHeaderTwo}>
                        Select All
                    </Text>
                    <Text style={style.TextHeaderTwo}>
                        Delete Selected
                    </Text>
                </View>
            </View>
            <View>
                <ScrollView>
                    <View>
                        <Item name="Metal Earrings" price="$20" category_name="Special Design" />
                        <Item name="Earrings" price="$16" category_name="Special Design" />
                        <Item name="Scarf" price="$15" category_name="Special Design" />
                        <Item name="Tote Bag" price="$89" category_name="Special Design" />
                        <Item name="Shipping address" price="$25" category_name="Special Design" />
                        <Item name="Metal Earrings" price="$20" category_name="Special Design" />
                        <Item name="Earrings" price="$16" category_name="Special Design" />
                        <Item name="Scarf" price="$15" category_name="Special Design" />
                        <Item name="Tote Bag" price="$89" category_name="Special Design" />
                        <Item name="Shipping address" price="$25" category_name="Special Design" />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
        
    )
}

const style = StyleSheet.create({
    TextHeaderTwo:{
        color: '#3E3E3E',
        fontSize: 13,
        lineHeight: 14,
        marginRight:10,
        // backgroundColor: 'grey',
    }
})


export default ItemList;