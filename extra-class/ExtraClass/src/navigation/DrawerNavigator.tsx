
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'
import BottomTapBarNavigator from './BottomTapBarNavigator'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {

  return (
    <Drawer.Navigator>
        <Drawer.Screen name='HomeScreen' component={BottomTapBarNavigator}  />
        <Drawer.Screen name='ProfileScreen' component={ProfileScreen}/>
        

    </Drawer.Navigator>
  )
}