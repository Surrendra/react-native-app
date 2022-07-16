import React from "react"
import {SafeAreaView, ScrollView, View} from "react-native"
import ItemView from "./src/components/ItemView";
import FlexBox from "./src/components/FlexBox";


const App = () => {
  return (
      <SafeAreaView>
        <ScrollView>
          <FlexBox/>
        {/* <ItemView />
        <ItemView />
        <ItemView />
        <ItemView />
        <ItemView />
        <ItemView /> */}
        </ScrollView>
      </SafeAreaView>
  )
}


export default App