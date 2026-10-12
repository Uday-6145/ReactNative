import { View, Text, Linking } from 'react-native'
import { Pressable } from 'react-native-gesture-handler';
import React, { useState } from 'react'

export default function OrderHistory({ navigation }: any) {

  const [isHover, setIsDrawerHovered] = useState(false)

  const openDrawer = () => {
    navigation.openDrawer()
  }

  const navigateToPage = () => {
    Linking.openURL("https://google.com")
  }
  return (
    <View style={{ flexDirection: "column", justifyContent: "center", height: "100%", alignItems: "center" }}>
      <Text style={{ color: "back", fontWeight: "600", fontSize: 40, marginBottom: 100 }}>OrderView Page</Text>
      <Pressable
        

        style={{ borderWidth: 2, padding: 12, backgroundColor: "#ffffff", borderRadius: 12,  }
        }>
        <Text onPress={openDrawer}>Open The Drawer</Text>
      </Pressable>



      <Pressable


        style={{ borderWidth: 2, marginTop: 20, padding: 10, borderRadius: 12, backgroundColor: "#ffffff" }} onPress={() => navigateToPage()}
      >
        <Text style={{ color: "black" }}>Go to google</Text>
      </Pressable>
    </View>
  )
}