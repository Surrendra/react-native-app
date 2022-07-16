import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import MacbookImage from '../../assets/images/macbook.jpeg';

const ItemView = () => {
    return (
        <View style={itemStyle.item}>
            <Image source={MacbookImage} style={itemStyle.image}></Image>
            <Text style={itemStyle.productName}>New Macbook Pro 2012</Text>
            <Text style={itemStyle.productPrice}>Rp. 25.000.000</Text>
            <Text style={itemStyle.productLocation}>Jakarta Barat</Text>
            <View style={itemStyle.BuyButton}>
                <Text style={itemStyle.TextBuyButton}>BELI</Text>
            </View>
        </View>
    )
}

const itemStyle = StyleSheet.create({
    item: {
        padding: 12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8,
        alignSelf:'center',
        marginTop:10
    },
    image: {
        width: 188,
        height: 107,
        borderRadius: 8
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16
    },
    productPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 12,
        color: '#F2994A',
    },
    productLocation: {
        fontSize: 12,
        fontWeight: '200',
        marginTop: 12
    },
    BuyButton: {
        backgroundColor: '#6FCF97',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20
    },
    TextBuyButton: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})

export default ItemView;