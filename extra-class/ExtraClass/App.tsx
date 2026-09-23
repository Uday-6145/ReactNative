import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Alert, useColorScheme, Pressable, TouchableWithoutFeedback, ImageBackground, StatusBar, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FontAwesome} from "@react-native-vector-icons/fontawesome"

const Data = [
  {
    id: '1',
    title: 'Info',
    paragraphs: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ],
  },
  {
    id: '2',
    title: 'Disclaimer',
    paragraphs: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ],
  }
]
const App = () => {

  const [initial, setInitial] = useState([])

  const apiCall = async () => {
    try {
      const apiResponse = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
      const jsonFormat = await apiResponse.json();
      setInitial(jsonFormat.meals)
      console.log(jsonFormat)

    }
    catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    apiCall()
  }, [])


  // const theme= useColorScheme()
  // const isDarkMode = theme==="dark";
  // const backgroundStyle = isDarkMode? "black":"white";
  // const textColor = isDarkMode? "white":"black"
  // return (
  //     <View style={styles.container}>
  //         <StatusBar hidden/>
  //         <ImageBackground resizeMode="contain" style={{height:"100%",width:"100%"}} source={{uri:"https://www.shutterstock.com/image-photo/vibrant-training-session-diverse-participants-260nw-2644537063.jpg"}}>
  //             <Text>About Us</Text>
  //             <Image style={styles.pic} source={{ uri: "https://imgs.search.brave.com/uO8Q7NGxy_oQLrn6FkQ6SMV1zRVpA6gF7Kl8Q2nxTC4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWV0/YWxsaWMtcHJlc3Nl/ZC1zLWpub2h3dzNz/dG56eDk2amsuanBn" }} />
  //             <FlatList
  //                 data={Data}
  //                 renderItem={({ item }) => (
  //                     <View>
  //                         <View>
  //                             <Text>{item.title}</Text>
  //                         </View>
  //                         <View>
  //                             <Text>{item.paragraphs}</Text>
  //                         </View>
  //                     </View>
  //                 )}
  //                 keyExtractor={(item) => item.id}
  //             />



  //             <Pressable>
  //                 <Text>
  //                     pressable button
  //                 </Text>
  //             </Pressable>
  //             <TouchableOpacity disabled activeOpacity={0.5} onPress={() => console.log("press")} style={{ width: 150, height: 50, padding: 10, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 20, backgroundColor: "black" }}>
  //                 <Text style={{ color: "white" }}>
  //                     touchable button
  //                 </Text>
  //             </TouchableOpacity>
  //             <TouchableWithoutFeedback>
  //                 <Text>
  //                     touchable without feedback  button
  //                 </Text>
  //             </TouchableWithoutFeedback>
  //             <Text>Send us your feedback on Support@gmail.com</Text>
  //         </ImageBackground>




  //         {/* <Text style={[styles.text, {color:textColor}]}>Hello bhaiyoo</Text>
  //   <Image style={{ width: 200, height: 200 }} source={{ uri: "https://imgs.search.brave.com/5sa_7ONUZiCVUdjeQO7WkvaSy3RWsIdrDfcJmZ44gWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/NzE3NDQ5Ny9waG90/by9sZXR0ZXItcy1w/YWludGVkLWluLWdv/bGQtYW5kLXdoaXRl/LW9uLWEtYmxhY2st/YmFja2dyb3VuZC1h/bmQtcGhvdG9ncmFw/aGVkLW9uLXRoZS1m/YWNhZGUtb2YtYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVRkd25uN1phNFJz/QXliSzBUcVV4bUpW/LUZUQ21ZMHBnNHVF/ZU9wV1hzVT0" }} />
  //   <TouchableOpacity onPress={() => Alert.alert('Button pressed!')}>
  //     <Text style={[styles.text, {color:textColor}]}>
  //       Button
  //     </Text>
  //   </TouchableOpacity> */}
  //     </View>
  // )



  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#d1a129ff" }}>
        <View style={{ backgroundColor: "white", marginTop: 60, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 25 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white" }}>Active</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white" }}>Completed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white" }}>Cancelled</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height:"83%"}}>
            <FlatList
              data={initial}
              renderItem={({ item, index }: { item: any, index: number }) => {
                return (
                  <View style={{ flexDirection: "row", height: 200, padding: 15, borderTopWidth: 2, marginBottom: 10, borderColor: "#f0a692ff" }}>
                    <Image style={{ height: "100%", width: 100, borderRadius: 20 }} source={{ uri: item.strMealThumb }} />
                    <View style={{ flexDirection: "column", marginLeft: 20, gap: 15 }}>
                      <View style={{ flexDirection: "row", gap: 30 }}>
                        <Text style={{ width: 150, fontWeight: "600", fontSize: 18 }}>{item.strMeal}</Text>
                        <Text style={{ color: "#fa8c4cff", fontSize: 20, fontWeight: "600" }}><Text>$</Text>{item.idMeal.slice(2)}</Text>
                      </View>

                      

                      <View style={{ flexDirection: "row", gap: 20 }}>
                        <Text style={{color:"rgba(255, 138, 49, 1)"}}><FontAwesome name='check' size={20} color={"rgba(72, 203, 70, 1)"}/>Ordered Deliverd</Text>
                        <Text>{item.strCountry}</Text>
                      </View>

                      <View style={{ flexDirection: "row", gap: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: "#d15710ff", borderRadius: 20, flexDirection: "row", justifyContent: "center", padding: 10 }}>
                          <Text style={{ color: "white" }}>Leave review</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                          <Text style={{ color: "white" }}>Order Again</Text>
                        </TouchableOpacity>
                      </View>
                    </View>



                  </View>
                )
              }}
            />
          </View>
          <View style={{ flexDirection: "row", backgroundColor: "#eb671bff", width: "100%" , justifyContent:"space-evenly", padding:20, borderRadius:30}}>
            <FontAwesome name='home' size={30} color={'white'}/>
            <FontAwesome name='hand-stop-o' size={30} color={'white'}/>
            <FontAwesome name='heart' size={30} color={'white'}/>
            <FontAwesome name='pencil-square-o' size={30} color={'white'}/>
            <FontAwesome name='support' size={30} color={'white'}/>
            
          </View>

        </View>
        

      </View>
    </SafeAreaView>
  )













}

export default App

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
  }
})