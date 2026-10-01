import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Linking, Alert, useColorScheme, Pressable, TouchableWithoutFeedback, ImageBackground, StatusBar, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from "@react-native-vector-icons/fontawesome"

const HomeScreen = ({ navigation }: any) => {
  console.log(navigation, 'this is navigation')
  const [initial, setInitial] = useState([])
  const [lodingState, setLoadingState] = useState(false)

  const systemScheme = useColorScheme(); // 'light' or 'dark'
  // const [isDarkMode, setIsDarkMode] = useState(systemScheme === 'dark');

  console.log(systemScheme)



  //API CALL LOGIC
  const apiCall = async () => {
    try {
      setLoadingState(true)
      const apiResponse = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
      const jsonFormat = await apiResponse.json();
      setInitial(jsonFormat.meals)
      console.log(jsonFormat)
      setLoadingState(false)

    }
    catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    apiCall()
  }, [])


  //NAVIGATION LOGIC
  const moveToOverView = () => {
    navigation.navigate('OverView')
  }

  const moveToSpecificElement = (item: any) => {
    navigation.navigate('ItemDetails', { itemDetails: item, screenName: "HomeScreen" })

  }

  const renderProductItems = ({ item, index }: { item: any, index: number }) => {

    const lastIndex = initial.length - 1

    return (
      <TouchableOpacity onPress={() => moveToSpecificElement(item)}>
        <View style={[styles.cardContainer, (index == 0 || index == lastIndex) ? {} : { borderTopWidth: 2 }]} >
          <Image style={{ height: "100%", width: 100, borderRadius: 20 }} source={{ uri: item.strMealThumb }} />

          <View style={{ flexDirection: "column", marginLeft: 20, gap: 15 }}>
            <View style={{ flexDirection: "row", gap: 30 }}>
              <Text style={{ width: 150, fontFamily: "Lato-BoldItalic.ttf", fontSize: 18 }}> {item.strMeal}</Text>
              <Text style={{ color: "#fa8c4cff", fontSize: 20, fontWeight: "600" }} ><Text>$</Text>{item.idMeal.slice(3)}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 20 }}>
              <Text style={{ color: "rgba(255, 138, 49, 1)" }}><FontAwesome name='check' size={20} color={"rgba(72, 203, 70, 1)"} />Ordered Deliverd</Text>
              <Text>{item.strCountry}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 20 }}>
              <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#d15710ff", borderRadius: 20, flexDirection: "row", justifyContent: "center", padding: 10 }}>
                <Text style={{ color: "white" }}>Leave review</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={{ color: "white" }}>Order Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  //MAIN UI
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#d1a129ff" }}>
        <View style={{ backgroundColor: "white", marginTop: 60, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 25 }}>
            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
              <Text style={{ color: "white" }}>Active</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
              <Text style={{ color: "white" }}>Completed</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
              <Text style={{ color: "white", fontFamily: "Lato-BoldItalic" }}>Cancelled</Text>
            </TouchableOpacity>


          </View>
          {/* <Image style={{height:80, width:150, tintColor:"transparent"}} source={{uri: "https://imgs.search.brave.com/rajcJFv6np5nvX303bu7mInCsY7KncU2j4vwbGd2Ef8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3doaXRl/LW1hbm5lcXVpbi15/ZWxsb3ctb3V0Zml0/LWRpc3BsYXllZC0y/NjBudy0yNzEyNTc2/MTU5LmpwZw"}}/> */}

          <View style={{ width: "100%", height: "100%", flexDirection:"column"}}>
            {
              lodingState ? <View style={{flex:1, justifyContent:"center"}}><ActivityIndicator size={'large'} /></View> : <FlatList data={initial} renderItem={renderProductItems}/>
            }



          </View>
          {/* <View style={{ flexDirection: "row", backgroundColor: "#eb671bff", width: "100%", justifyContent: "space-evenly", padding: 20, borderRadius: 30 }}>
            <TouchableOpacity onPress={moveToOverView}>
              <FontAwesome name='home' size={30} color={'white'} />
            </TouchableOpacity>
            <FontAwesome name='hand-stop-o' size={30} color={'white'} />
            <FontAwesome name='heart' size={30} color={'white'} />
            <FontAwesome name='pencil-square-o' size={30} color={'white'} />
            <FontAwesome name='support' size={30} color={'white'} />


          </View> */}

        </View>


      </View>
    </SafeAreaView>
  )













}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: "20",
    gap: "15"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  pic: {
    height: 120,
    width: '100%'
  },
  button: {
    padding: 10,
    backgroundColor: "#ff8922ff",
    borderRadius: 25,
    width: 100,
    flexDirection: "row",
    justifyContent: "center"
  },
  cardContainer: {
    flexDirection: "row",
    height: 200,
    padding: 15,
    marginBottom: 10,
    borderColor: "#f0a692ff"
  }
})