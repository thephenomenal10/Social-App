import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MessageScreen extends React.Component{

    render(){
        return(
            <View>
                <Text>Message Screen....</Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})