import React, { Component } from "react"
import {Text, View,Image, TextInput, SafeAreaView,StyleSheet} from "react-native"
import kanalLogo from './assets/images/kanal.png';
import MacbookImage from './assets/images/macbook.jpeg';

const App = () => {
  return (
      <SafeAreaView>
        <ItemView/>
        <FirstName />
        <LastName />
        <BmcImage />
        <TextInput style={{ borderWidth: 1, height: 50, marginTop: 90 }} />
        <BoxGreen />
        <Profile />
        <View style={style.box}></View>
      </SafeAreaView>
  )
}

const FirstName = () => {
  return (
    <View>
      <Text>Surendra</Text>
    </View>
  );
};

const LastName = () => {
  return <Text>Made, S.Kom</Text>
}


function BmcImage() {
  return <Image source={{ uri:"https://bmc.baliprov.go.id/assets/img/logo/logo.png" }} style={{width:'100%',height:100}}/>
}

class BoxGreen extends Component {
  render (){
    return <Text style={style.text}>Ini Kompnent dari class</Text>;
  }
}

class Profile extends Component {
  render(){
    return (
      <View style={{ marginTop:90 }}>
        <Image source={kanalLogo} style={style.image}></Image>
      </View>
    )
  }
}

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
  item:{
    alignContent:'center',
    padding:12,
    backgroundColor:'#F2F2F2',
    width:212,
    borderRadius: 8
  },
  image:{
    width:188,
    height:107,
    borderRadius:8
  }, 
  productName:{
    fontSize:14,
    fontWeight:'bold',
    marginTop:16
  },
  productPrice:{
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color:'#F2994A',
  },
  productLocation: {
    fontSize: 12,
    fontWeight: '200',
    marginTop: 12
  },
  BuyButton:{
    backgroundColor:'#6FCF97',
    paddingVertical:6,
    borderRadius:25,
    marginTop:20
  },
  TextBuyButton:{
    fontSize:14,
    fontWeight:'600',
    color:'white',
    textAlign:'center'
  }
})

const style = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'green',
    marginLeft:10
  },
  image:{
    width:'100%',
    height:100,
    borderWidth:2,
    borderColor:'white'
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderColor: 'red',
    borderWidth: 10,
    marginTop: 10,
    marginLeft: 10 
  }
})
export default App