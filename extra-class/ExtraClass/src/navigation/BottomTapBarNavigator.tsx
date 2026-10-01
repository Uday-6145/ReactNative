import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screens/ProfileScreen'
import OrderHistory from '../screens/OrderHistory'
import HomeScreen from '../screens/HomeScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemDetails from '../screens/ItemDetails';

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()



const HomePagenavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='ItemDetails' component={ItemDetails}/>

        </Stack.Navigator>
    )
}



export default function BottomTapBarNavigator() {
    
  return (
    <Tab.Navigator screenOptions={{headerShown:false, title:"", tabBarStyle:{backgroundColor:"rgba(255, 145, 0, 1)", borderTopRightRadius:25, borderTopLeftRadius:25, paddingTop:10}} }>
        <Tab.Screen 
        name='OrderHistoryScreen'
        component={OrderHistory} 
        options={{
            tabBarIcon: ()=> {
                return(
                    <Icon name="heart" size={25} />
                )
            },
            tabBarLabel : () => {
                return(
                    <Text>HII!</Text>
                )
            },
            tabBarBadge : 5,
            tabBarBadgeStyle : {
                backgroundColor:"black"
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: 'transparent',

        }}
        
        />
        <Tab.Screen name='Home' component={HomePagenavigator}
        options={{
            tabBarIcon: () => {
                return(
                    <Icon  name='home' size={30} />
                )
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: 'transparent',
        }}
        />
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} 
        options={{
            tabBarIcon: () => {
                return(
                    <Icon name="star" size={30} />
                )
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#ffffff',
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: 'transparent',
        }}/>
        
        
    </Tab.Navigator>
  )
}