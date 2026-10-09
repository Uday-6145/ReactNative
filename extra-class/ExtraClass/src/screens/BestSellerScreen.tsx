import { View, Text, FlatList, Image, TouchableOpacity, AppState } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { bestSellerData } from '../utilities/customJson';
import { useDispatch, useSelector } from 'react-redux';
import { RootState , AppDispatch} from '../redux/store';
import { addToCart } from '../redux/reducers/CardReducer';





export default function BestSelller() {
  const {cartLength, cartList, loading} = useSelector ((props : RootState) => props.CartReducer)
  const dispatch = useDispatch<AppDispatch >()


  const addItemsTocart = (prop : any) => {
    dispatch(addToCart(prop))
  }
  console.log(cartList, "This is current cart list")
  
  return (
    
    <View style={{ backgroundColor: "#f3cf1cff",}}>
      
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: "100", fontWeight: "600", fontSize: 40, color: "#ffffffff" }}>Best Seller</Text>
      </View>

      <View style={{ backgroundColor: "#ffffff", height: "90%", marginTop: "50",borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginBottom:20}}>
          <Text style={{ color: "#e06614ff", fontWeight: "800", fontSize: 20, marginTop: 40 }}>Discover The Most Popular Dishes</Text>
          
          
        </View>

        <View>
          <FlatList
            data={bestSellerData}
            keyExtractor={(_, index) => `${index}`}
            numColumns={2}
            contentContainerStyle = {{paddingBottom:350}}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }}>
                <View >
                  <View style={{ padding: 10, marginBottom:20}}>

                    {/* image */}
                    <View style={{position:"relative"}}>
                      <Image style={{ height: "150", borderRadius: 20 }} source={{ uri: item.image }} />


                      <Ionicons name='heart' size={22} style={{height:25, width:25, position:"absolute", color:"red", top:10, right:10, backgroundColor:"#ffffff", borderRadius:15, textAlignVertical:"center", textAlign:"center"}}/>

                      <View style={{position:"absolute", top:10, left:10, backgroundColor:"#ffffff", borderRadius:20, padding:2}}>
                        <Text style={{fontSize:20}}>{item.icon}</Text>
                      </View>


                      <View style={{position:"absolute", bottom:10, right:10, backgroundColor:"#e06614ff", borderRadius:15, padding:4}}>
                        <Text style={{color:"#ffffff", fontWeight:"500"}}>${item.price}</Text>
                      </View>
                    </View>
                    


                    {/* name & rating */}
                    <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                      <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: "500", marginRight: 15, flex:1, flexShrink:1}}>{item.name}</Text>
                      <Text style={{ backgroundColor: "#e06614ff", borderRadius: 20, color: "#ffffff", height: "20", width: "45", alignSelf: "center", textAlign: "center", textAlignVertical: "center" }}>{item.rating}⭐️</Text>
                    </View>

                    {/* description and bag-logo */}
                    <TouchableOpacity onPress={() => addItemsTocart(item)} style={{ flexDirection: "row", justifyContent: "space-between", marginTop:3}}>
                      <Text style={{flex:1, flexShrink:1}} numberOfLines={2}>{item.description}</Text>
                      <Ionicons name='bag' size={20} style={{ backgroundColor: "#e06614ff", color: "#ffffff", alignSelf:"center", padding:3, borderRadius:18}} />
                    </TouchableOpacity>


                  </View>
                </View>
                </TouchableOpacity>
                



              )
            }}

          />

        </View>


      </View>

    </View>
  )
}