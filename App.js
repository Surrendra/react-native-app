import React from "react"
import {SafeAreaView, ScrollView, View} from "react-native"
import ItemView from "./src/components/ItemView";
import FlexBox from "./src/components/FlexBox";
import ListView from "./src/components/ListView";


const App = () => {
  return (
      <SafeAreaView>
        
          <FlexBox/>
      <ScrollView>
          <ListView 
            subject="Penatan Arsip Elektronik"
            nomor="B.42.040/18888/LPSE/B.PBJEK"
            fromUnit="SUB KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
          />
          <ListView
            subject="Sosialisasi Anti Korupsi/Gratifikasi kepada ASN dan Masyarakat."
            nomor="B.09.700/3674/set/Itprov"
            fromUnit="SUB KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
          />
          <ListView
            subject="Permohonan Audiensi"
            nomor="092/EBC/BOARD/V/2022"
            fromUnit="KEPALA DINAS KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
          />
          <ListView
            subject="Penatan Arsip Elektronik"
            nomor="B.42.040/18888/LPSE/B.PBJEK"
            fromUnit="SUB KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
          />
          <ListView
            subject="Sosialisasi Anti Korupsi/Gratifikasi kepada ASN dan Masyarakat."
            nomor="B.09.700/3674/set/Itprov"
            fromUnit="SUB KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
          />
          <ListView
            subject="Permohonan Audiensi"
            nomor="092/EBC/BOARD/V/2022"
            fromUnit="KEPALA DINAS KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
          />
        <ListView
          subject="Penatan Arsip Elektronik"
          nomor="B.42.040/18888/LPSE/B.PBJEK"
          fromUnit="SUB KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
        />
        <ListView
          subject="Sosialisasi Anti Korupsi/Gratifikasi kepada ASN dan Masyarakat."
          nomor="B.09.700/3674/set/Itprov"
          fromUnit="SUB KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
        />
        <ListView
          subject="Permohonan Audiensi"
          nomor="092/EBC/BOARD/V/2022"
          fromUnit="KEPALA DINAS KOORDINATOR UNIT SUBSTANSI APLIKASI INFORMATIKA"
        />

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