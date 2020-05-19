import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity } from 'react-native'

export default class Inbox extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>INBOX </Text>        
          </View>
        )
    }
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor:"orange",
    textTransform:"capitalize",
    width:100,
    height:40,
    marginBottom:5,
    alignItems:"center",
    alignContent:"center",
    borderWidth:1,
    borderRadius:5,
    fontSize:45,

  },
  txt:{
    alignContent:"center",
    textAlign:"center",
    textAlignVertical:"center",
    fontWeight:"bold",
  
  }

})
