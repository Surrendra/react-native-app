import React,{Component} from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

class ListView extends Component {
    onPressButton(subject) {
        alert(subject);
    }

    render() {
        return (
            <View style={ListStyle.border}>
                    <TouchableOpacity onPress={() => {
                        this.onPressButton(this.props.subject)
                    }}>
                    <Text style={ListStyle.subject}>{this.props.subject}</Text>
                    <Text style={ListStyle.nomor}>{this.props.nomor}</Text>
                    <Text style={ListStyle.fromUnit}>{this.props.fromUnit}</Text>
                    <View style={ListStyle.borderStatusDisposition}>
                        <LabelStatus text="Belum Terdisposisi" />
                        <LabelStatus text="Progress Selesai" />
                    </View>
                </TouchableOpacity>
                <Line />
            </View>
        )
    }
}

const LabelStatus = (props) => {
    if (props.text == 'Progress Selesai') {
        return (
            <View style={ListStyle.doneLabelStatus}>
                <Text style={ListStyle.TextStatus}>{props.text}</Text>
            </View>
        )   
    }
    return (
        <View style={ListStyle.labelStatus}>
            <Text style={ListStyle.TextStatus}>{props.text}</Text>
        </View>
    )
}

const Line = () => {
    return (
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
    )
}

const ListStyle = StyleSheet.create({
    border:{
        // backgroundColor:'grey',
        marginTop:10,
        marginLeft:10,
        justifyContent:'flex-start',
        flexDirection:'column'
    },
    subject:{
        fontWeight:'bold',
        fontSize:14
    },
    nomor:{
        marginTop:10,
        fontSize:12,
        color:'grey',
    },
    fromUnit: {
        marginTop: 10,
        fontSize: 12,
        color: 'grey',
    },
    borderStatusDisposition:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    labelStatus:{
        width:150,
        textAlignVertical:'center',
        height:20,
        backgroundColor:'grey',
        borderRadius:10,
        marginRight:10,
    },
    doneLabelStatus:{
        width: 150,
        textAlignVertical:'center',
        height: 20,
        backgroundColor: 'green',
        borderRadius: 10,
        marginRight: 10,
    },
    TextStatus:{
        alignSelf:'center',
        color:'white',
        fontSize:14,
    }
})

export default ListView;