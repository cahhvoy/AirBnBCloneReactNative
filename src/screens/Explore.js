/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text,
     StyleSheet,
     View,
     SafeAreaView,
     TextInput,
     Platform,
     StatusBar,
     ScrollView,
     Image,
     Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../Components/Explore/Category.js';
const {height,width} = Dimensions.get('window');

export default class Explore extends Component {

    UNSAFE_componentWillMount(){
        this.startHeaderHeight=80;
        if(Platform.OS=='android'){
            this.startHeaderHeight=100+ StatusBar.currentHeight
        }
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                 <View style={{flex:1}}>
                     <View style={[styles.Header,{height:this.startHeaderHeight}]}>
                         <View style={[styles.HeaderInHld,{marginTop:Platform.OS=="android"?30:null}]}>
                             <Icon name="ios-search" size={30} style={{alignSelf:"center"}}/>
                             <TextInput
                             underlineColorAndroid="transparent"
                               placeholder="Try Nairobi"
                               placeholderTextColor="grey"
                               style={styles.HeaderInput}
                             />
                         </View>
                     </View>
                     <ScrollView scrollEventThrottle={16}>
                        <View style={{flex:1,paddingTop:20,backgroundColor:'#ffffff'}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                What can we help ou find, Cahhvoy ?
                            </Text>
                            <View style={{height:130,marginTop:20}}>
                                <ScrollView 
                                     horizontal={true}
                                     showsHorizontalScrollIndicator={false}
                                     >
                                    <Category 
                                        imageUri={require("../assets/home.jpg")}
                                        name="Home"/>
                                    <Category 
                                        imageUri={require("../assets/experiences.jpg")}
                                        name="experiences"/>
                                    <Category 
                                        imageUri={require("../assets/restaurant.jpg")}
                                        name="restaurant"/>

                                </ScrollView>
                            </View>
                            <View style={{marginTop:40,paddingHorizontal:20,}}>
                                <Text style={{fontSize:24,fontWeight:'700'}}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{fontWeight:'100',margintop:10}}>
                                    A new selection of homes verified for quality and comfort
                                </Text>
                                <View style={{width:width-40,height:200,marginTop:20}}>
                                    <Image 
                                     source={require('../assets/home.jpg')}
                                     style={{flex:1,height:null,width:null,resizeMode:'cover',
                                            borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}
                                    />
                                </View>
                            </View>
                        </View>
                     </ScrollView>
                 </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    Header:{
        backgroundColor:'#ffffff',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd',
    },
    HeaderInHld:{
        flexDirection:'row',
        padding:20,
        marginHorizontal:20,
        backgroundColor:'#ffffff',
        shadowOffset:{height:0,width:0},
        shadowColor:'black',
        shadowOpacity:0.2,
        elevation:1,
    },
    HeaderInput:{
         flex:1,
        fontWeight:'700',
        backgroundColor:'#ffffff',
        fontSize:18,
        letterSpacing:1
        // marginBottom:17
    }
})
