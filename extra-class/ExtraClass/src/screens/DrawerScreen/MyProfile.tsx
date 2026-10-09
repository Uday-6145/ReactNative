import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MyProfile(props: any) {
  return (
    <View style={{ height:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:30, fontWeight:"600"}}>This is userProfile Drawer</Text>

      <TouchableOpacity onPress={ () => props.navigation.navigate("HomeScreen")}>
        <Text>Button for home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("DrawerScreen")}>
        <Text>Button for drawer navigation</Text>
      </TouchableOpacity>
    </View>
  )
}