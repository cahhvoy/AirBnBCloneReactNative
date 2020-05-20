import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import Saved from '../screens/Saved';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Trips from '../screens/Trips';
import Inbox from '../screens/Inbox';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Explore:{
        screen:Explore,
        navigationOptions:{
            tabBarLabel:'EXPLORE',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-search" color={tintColor} size={24}/>
            )
        }
    },
    Saved:{
        screen:Saved,
        navigationOptions:{
            tabBarLabel:'SAVED',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-heart" color={tintColor} size={24}/>
            )
        }
    },
    Trips:{
        screen:Trips,
        navigationOptions:{
            tabBarLabel:'TRIPS',
            tabBarIcon:({tintColor})=>(
                <Image source={require('../assets/airbnb.png')} style={{height:24,width:24,tintColor:tintColor}}/>
            )
        }
    },
    Inbox:{
        screen:Inbox,
        navigationOptions:{
            tabBarLabel:'INBOX',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-chatboxes" color={tintColor} size={24}/>
            )
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            tabBarLabel:'PROFILE',
            tabBarIcon:({tintColor})=>(
                <Icon name="ios-person" color={tintColor} size={24}/>
            )
        }
    },
  },
  {
    tabBarOptions:{
        activeTintColor:'red',
        inactiveTintColor:'grey',
        style:{
           backgroundColor:'white',
           borderTopWidth:0,
           shadowOffset:{height:5,width:3},
           shadowColor:'black',
           shadowOpacity:0.5,
           elevation:5
        }
    }
  },
);
export default createAppContainer(BottomTabNavigator);
