import { View, Text } from 'react-native'
import { useState } from 'react';
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import OverView from './src/screens/OverView'
import ItemDetails from './src/screens/ItemDetails'
import BottomTapBarNavigator from './src/navigation/BottomTapBarNavigator'
import DrawerNavigator from './src/navigation/DrawerNavigator';
const Stack = createNativeStackNavigator()


export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='DrawerScreen' >
            <Stack.Screen name='DrawerScreen' component={DrawerNavigator} options={{headerShown:false}}/>
            
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name = 'ProfileScreen' component={ProfileScreen}/>
            <Stack.Screen name='OverView' component={OverView} options={{title:"Welcome", headerStyle:{backgroundColor:"grey"}, headerTitleStyle:{}}}/>
            <Stack.Screen name='ItemDetails' component={ItemDetails} options={{ headerShown:true ,headerStyle:{backgroundColor:"#dbd7ccff"}}}/>
            
      
        </Stack.Navigator>
        
    </NavigationContainer>

  )
}