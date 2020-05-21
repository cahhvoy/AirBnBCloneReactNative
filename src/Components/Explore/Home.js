/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

import StarRating from 'react-native-star-rating';
export default class Home extends Component {
    render() {
        // eslint-disable-next-line prettier/prettier
        return (
        <View style={{width:this.props.width/2-30,height:this.props.width/2-30,borderWidth:0.5,borderColor:'#dddddd'}}>
            <View style={{flex:1}}>
                <Image source={require('../../assets/home.jpg')}
                style={{width:null,height:null,flex:1,resizeMode:'cover'}}/>
            </View>
            <View style={{flex:1,alignItems:"flex-start",justifyContent:"space-evenly",paddingLeft:10}}>
                <Text style={{fontSize:10,color:'#b63838'}}>{this.props.type} </Text>
                <Text style={{fontSize:12,fontWeight:'bold'}}>{this.props.name} </Text>
                <Text style={{fontSize:10}}>{this.props.price}</Text>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  starSize={10}
                  rating={this.props.rating}
                />
            </View>
        </View>
        )
    }
}
