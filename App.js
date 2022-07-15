import React, { Component } from "react"
import {Text, View,Image, TextInput} from "react-native"

const App = () => {
  return (
    <View>
      <View style={{ marginTop:90 }}/>
      <FirstName />
      <LastName />
      <BmcImage/>
      <TextInput style={{ borderWidth: 1, height :50,marginTop:90}}/>
      <BoxGreen />
      <Profile/>
    </View>
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
    return <Text>Ini Kompnent dari class</Text>;
  }
}

class Profile extends Component {
  render(){
    return (
      <View style={{ marginTop:90 }}>
        <Image source={{ uri: 'https://kanal.baliprov.go.id/vendor/image/eoffice_logo.png' }} style={{ width: '100%', height: 100 }}></Image>
      </View>
    )
  }
}

export default App