import React, { useState } from "react";
import { View,Text, ScrollView,StyleSheet,SafeAreaView, FlatList } from "react-native";
import Item from "../components/Item";
import { products } from "../Payload";


const ItemList = () => {
    const [totalProduct, setTotalProduct] = useState(0)

    const RenderItem = ({item}) => {
        return <Item 
            name={item.title} 
            price={item.price} 
            category_name={item.type} 
            updateTotalProduct={() => updateTotalProduct()} 
            decreeTotalProduct={() => decreeTotalProduct()}
        />
    }

    function decreeTotalProduct() {
        setTotalProduct(totalProduct - 1);
    }

    function updateTotalProduct() {
        setTotalProduct(totalProduct + 1);
    }

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
                        {totalProduct} Item
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
                <FlatList
                    data={products}
                    renderItem={RenderItem}
                    keyExtractor={item => item.id}
                >
                </FlatList>
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