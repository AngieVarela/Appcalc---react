import { StyleSheet, Text, View } from "react-native";

export default function Header (props){
    return(
        <View style={myStyle.viewHeader}>
            <Text>{props.titulo}</Text>
            <Text>{props.subtitulo}</Text>
        </View>
    );
}

const myStyle=StyleSheet.create({
    viewHeader:{
        flex:1,
        justifiContent: 'center',
        alighItems: 'center',
        backgroundColor: 'orange',
        width: '80%'
    }
})