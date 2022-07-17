import React,{Component} from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ListView from "../components/ListView";

class Dashboard extends Component {
    render() {
        return (
            <SafeAreaView>
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
                </ScrollView>
            </SafeAreaView>          
        )
    }
}