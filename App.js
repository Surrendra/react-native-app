import React from "react"
import {SafeAreaView, ScrollView, View} from "react-native"
import ItemView from "./src/components/ItemView";
import { SampleComponent, Profile } from "./src/components/sampleComponent";


const App = () => {
  return (
      <SafeAreaView>
        <ScrollView>
        <ItemView />
        <ItemView />
        <ItemView />
        <ItemView />
        <ItemView />
        <ItemView />
        </ScrollView>
      </SafeAreaView>
  )
}


export default App