import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OrderHistory({navigation}:any) {


  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <View style={{flexDirection:"column", justifyContent:"center", height:"100%", alignItems:"center"}}>
      <Text>OrderHistory</Text>
      <TouchableOpacity style={{borderWidth:2, padding:12, backgroundColor:'#67e40eff', borderRadius:12}}>
        <Text onPress={openDrawer}>Open The Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}