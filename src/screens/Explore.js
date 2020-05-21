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
     Dimensions,
     Animated,
     NativeEventEmitter} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../Components/Explore/Category.js';
import Home from '../Components/Explore/Home.js';
import Tag from '../Components/Explore/Tag.js';

const {height,width} = Dimensions.get('window');

export default class Explore extends Component {

    UNSAFE_componentWillMount(){
        this.startHeaderHeight=80;
        this.endHeaderHeight=50;
        if(Platform.OS==='android'){
            this.startHeaderHeight= 140 + StatusBar.currentHeight;
            this.endHeaderHeight= 110 + StatusBar.currentHeight
        }
        
        this.scrollY = new Animated.Value(0);

        this.animatedHeaderHeight = this.scrollY.interpolate({
                inputRange:[0,50],
                outputRange:[this.startHeaderHeight,this.endHeaderHeight],
                extrapolate:"clamp"
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange:[this.endHeaderHeight,this.startHeaderHeight],
            outputRange:[0,1],
            extrapolate:'clamp'
        })

        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange:[this.endHeaderHeight,this.startHeaderHeight],
            outputRange:[-30,10],
            extrapolate:'clamp'
        })
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                 <View style={{flex:1}}>
                     <Animated.View style={[styles.Header,{height:this.animatedHeaderHeight}]}>
                         <View style={[styles.HeaderInHld,{marginTop:Platform.OS==="android"?30:null}]}>
                             <Icon name="ios-search" size={30} style={{alignSelf:"center"}}/>
                             <TextInput
                             underlineColorAndroid="transparent"
                               placeholder="Try Nairobi"
                               placeholderTextColor="grey"
                               style={styles.HeaderInput}
                             />
                         </View>
                         <Animated.View
                           style={{flexDirection:'row',marginHorizontal:20,position:'relative',
                             top:this.animatedTagTop,opacity:this.animatedOpacity}}>
                           <Tag tag='Guests'/>
                           <Tag tag='Dates'/>                          
                         </Animated.View>
                     </Animated.View>
                     <ScrollView 
                      scrollEventThrottle={16}
                      onScroll={Animated.event(
                          [
                              {
                                  nativeEvent:{contentOffset:{y:this.scrollY}}
                              }
                              
                          ],
                          {
                            useNativeDriver: false,
                          }
                      )} >
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
                                <Text style={{fontWeight:'100',marginTop:10}}>
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
                        <View style={{marginTop:40}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Homes around the world
                            </Text>
                            <View style={{margintop:20,paddingHorizontal:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                                <Home type="PRIVATE - 3 BEDROOM" name="cool place" price='130' rating={4} width={width}/>
                                <Home  type="BUSH HOUSE " name="nature living" price='75' rating={2} width={width}/>
                                <Home  type="APARTMENT BUILDING- 1 BEDROOM" name="cool place" price='60' rating={3} width={width}/>
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
