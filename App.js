import React from "react"
import {Text, View,Image, TextInput} from "react-native"

const App = () => {
  return (
    <View>
      <View style={{ marginTop:90 }}/>
      <FirstName />
      <LastName />
      <BmcImage/>
      <TextInput style={{ borderWidth: 1, height :50,marginTop:90}}/>
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

export default App