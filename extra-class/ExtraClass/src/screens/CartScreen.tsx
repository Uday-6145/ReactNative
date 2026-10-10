import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


export default function CartScreen() {
  const cartList = useSelector((state: RootState) => state.CartReducer.cartList) // useSelector does not move the data it just read the data
  return (
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 5 }}>
      <Text style={{ fontSize: 50, fontWeight: "600", marginTop: 50, marginBottom: 100 }}>Cart List</Text>
      <FlatList
        data={cartList}
        keyExtractor={(item : any) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <View >
              <View style={{ padding: 10, marginBottom: 20 }}>

                {/* image */}
                <View style={{ position: "relative" }}>
                  <Image style={{ height: "150", borderRadius: 20 }} source={{ uri: item.image }} />


                  <Ionicons name='heart' size={22} style={{ height: 25, width: 25, position: "absolute", color: "red", top: 10, right: 10, backgroundColor: "#ffffff", borderRadius: 15, textAlignVertical: "center", textAlign: "center" }} />

                  <View style={{ position: "absolute", top: 10, left: 10, backgroundColor: "#ffffff", borderRadius: 20, padding: 2 }}>
                    <Text style={{ fontSize: 20 }}>{item.icon}</Text>
                  </View>


                  <View style={{ position: "absolute", bottom: 10, right: 10, backgroundColor: "#e06614ff", borderRadius: 15, padding: 4 }}>
                    <Text style={{ color: "#ffffff", fontWeight: "500" }}>${item.price}</Text>
                  </View>
                </View>



                {/* name & rating */}
                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                  <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: "500", marginRight: 15, flex: 1, flexShrink: 1 }}>{item.name}</Text>
                  <Text style={{ backgroundColor: "#e06614ff", borderRadius: 20, color: "#ffffff", height: "20", width: "45", alignSelf: "center", textAlign: "center", textAlignVertical: "center" }}>{item.rating}⭐️</Text>
                </View>

                {/* description*/}
                
                <Text style={{ flex: 1, flexShrink: 1 }} numberOfLines={2}>{item.description}</Text>
                  
               


              </View>
            </View>
          )
        }}
      />
    </View>
  )
}