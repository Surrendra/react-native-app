import React, { Component } from "react"
import {Text, View,Image, TextInput, SafeAreaView,StyleSheet} from "react-native"
import kanalLogo from './assets/images/kanal.png';

const App = () => {
  return (
      <SafeAreaView>
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