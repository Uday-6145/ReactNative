import { View, Text } from 'react-native'
import React from 'react'

export default function MyProfile() {
  return (
    <View style={{ height:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:30, fontWeight:"600"}}>This is userProfile Drawer</Text>
    </View>
  )
}