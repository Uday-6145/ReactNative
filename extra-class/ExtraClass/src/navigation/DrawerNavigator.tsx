

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTapBarNavigator from './BottomTapBarNavigator'
import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {

  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        width: '80%',
        backgroundColor: '#bc4d2cff',
        borderTopLeftRadius:65,
        borderBottomLeftRadius:65

      },
      drawerItemStyle: {
        marginVertical: 8,
        borderRadius: 15,
      },
      drawerLabelStyle: {
        fontSize: 18,
        fontWeight: '600',
      },
      headerShown:false,

      drawerPosition: "right",
      drawerType: "front",
      





    }}
    drawerContent={(props) => {
      return(
        <CustomDrawerContent {...props}/>
      )
    }}
    >
      <Drawer.Screen name='HomeScreen' component={BottomTapBarNavigator} />
      


    </Drawer.Navigator>
  )
}