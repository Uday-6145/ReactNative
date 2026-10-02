import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';


const bestSellerData = [
  {
    id: "1",
    name: "Baked Salmon",
    description: "Fresh salmon baked with fennel, tomatoes and herbs",
    price: 16.49,
    rating: 4.8,
    image:
      "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    category: "Seafood",
    icon: "🐟",
    isFavorite: false,
  },

  {
    id: "2",
    name: "Cajun Fish Tacos",
    description: "Spicy Cajun fish served with fresh vegetables and tacos",
    price: 12.49,
    rating: 4.9,
    image:
      "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    category: "Seafood",
    icon: "🌮",
    isFavorite: true,
  },

  {
    id: "3",
    name: "Escovitch Fish",
    description: "Fried fish served with colorful vegetables and spices",
    price: 14.99,
    rating: 4.7,
    image:
      "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    category: "Seafood",
    icon: "🐟",
    isFavorite: false,
  },

  {
    id: "4",
    name: "Fish Pie",
    description: "Creamy fish filling covered with golden mashed potatoes",
    price: 15.99,
    rating: 4.8,
    image:
      "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    category: "Seafood",
    icon: "🥧",
    isFavorite: false,
  },

  {
    id: "5",
    name: "Fish Stew",
    description: "Rich fish stew with vegetables and a flavorful rouille",
    price: 13.99,
    rating: 4.6,
    image:
      "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
    category: "Seafood",
    icon: "🍲",
    isFavorite: true,
  },

  {
    id: "6",
    name: "Garides Saganaki",
    description: "Juicy prawns cooked with tomato sauce and feta cheese",
    price: 17.49,
    rating: 4.9,
    image:
      "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
    category: "Seafood",
    icon: "🍤",
    isFavorite: false,
  },

  {
    id: "7",
    name: "Honey Teriyaki Salmon",
    description: "Grilled salmon glazed with sweet honey teriyaki sauce",
    price: 18.49,
    rating: 4.8,
    image:
      "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    category: "Seafood",
    icon: "🐟",
    isFavorite: true,
  },

  {
    id: "8",
    name: "Kedgeree",
    description: "Smoked fish with rice, eggs and aromatic spices",
    price: 13.49,
    rating: 4.7,
    image:
      "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
    category: "Seafood",
    icon: "🍚",
    isFavorite: false,
  },

  {
    id: "9",
    name: "Kung Po Prawns",
    description: "Crispy prawns tossed in a spicy Kung Po sauce",
    price: 16.99,
    rating: 4.9,
    image:
      "https://www.themealdb.com/images/media/meals/1525873040.jpg",
    category: "Seafood",
    icon: "🍤",
    isFavorite: false,
  },

  {
    id: "10",
    name: "Laksa King Prawn Noodles",
    description: "King prawns and noodles in a creamy spicy laksa broth",
    price: 15.49,
    rating: 4.8,
    image:
      "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
    category: "Seafood",
    icon: "🍜",
    isFavorite: true,
  },

  {
    id: "11",
    name: "Recheado Masala Fish",
    description: "Fish marinated in a spicy and flavorful masala",
    price: 14.49,
    rating: 4.7,
    image:
      "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
    category: "Seafood",
    icon: "🐟",
    isFavorite: false,
  },

  {
    id: "12",
    name: "Salmon Avocado Salad",
    description: "Fresh salmon with creamy avocado and crisp vegetables",
    price: 14.99,
    rating: 4.8,
    image:
      "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    category: "Seafood",
    icon: "🥗",
    isFavorite: true,
  },

  {
    id: "13",
    name: "Salmon Prawn Risotto",
    description: "Creamy risotto with tender salmon and juicy prawns",
    price: 18.99,
    rating: 4.9,
    image:
      "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
    category: "Seafood",
    icon: "🍤",
    isFavorite: false,
  },

  {
    id: "14",
    name: "Saltfish and Ackee",
    description: "Traditional saltfish cooked with ackee and vegetables",
    price: 13.49,
    rating: 4.6,
    image:
      "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
    category: "Seafood",
    icon: "🐟",
    isFavorite: false,
  },
];

export default function BestSelller() {

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
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:3}}>
                      <Text style={{flex:1, flexShrink:1}} numberOfLines={2}>{item.description}</Text>
                      <Ionicons name='bag' size={20} style={{ backgroundColor: "#e06614ff", color: "#ffffff", alignSelf:"center", padding:3, borderRadius:18}} />
                    </View>


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