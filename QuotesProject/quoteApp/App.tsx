import React, { useRef } from "react";
import {View, Text, FlatList, Button, Animated} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const App = () => {
  const FlatListRef = React.useRef<FlatList>(null)
  const onPressLearnMore = (index: number) => {
    FlatListRef.current?.scrollToIndex({index:index})
  }
  const quotes = [
    {
      id: "1",
      quote: "Small steps still move you forward.",
      author: "Maya Bennett",
      date: "10/1/26"
    },
    {
      id: "2",
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      date: "13/4/26"
    },
    {
      id: "3",
      quote: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
      date: "10/3/26"
    },
    {
      id: "1",
      quote: "Small steps still move you forward.",
      author: "Maya Bennett",
      date: "10/1/26"
    },
    {
      id: "2",
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      date: "13/4/26"
    },
    {
      id: "3",
      quote: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
      date: "10/3/26"
    },
    {
      id: "1",
      quote: "Small steps still move you forward.",
      author: "Maya Bennett",
      date: "10/1/26"
    },
    {
      id: "2",
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      date: "13/4/26"
    },
    {
      id: "3",
      quote: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
      date: "10/3/26"
    }
  ];


  return(
    <SafeAreaView style={{backgroundColor:"white", flex:1, flexDirection:"row",}}>
      <View style={{width:"100%"}}>
        <Button 
            onPress={() => onPressLearnMore(3)}
            title="press me"
            

          />
        <FlatList 
          data = {quotes}
          renderItem = {({item}) => (
            <View style={{backgroundColor:"#83bec6ff", borderColor:"white", borderWidth:2, width:"100%", padding:10, borderRadius:12, marginBottom:15}}>
              <Text style={{fontSize:55, color:"#951c3aff", fontWeight:"600"}}>"</Text>
              <Text style={{color: "black", fontSize:35, fontFamily:"RobotoMono-Thin", marginBottom:20}}>{item.quote}</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={{color: "#e8fbfbff", fontSize:25, fontWeight:"700", fontFamily:"Roboto"}}> ~{item.author}</Text>
                  <Text style={{marginLeft:20, fontSize:15, fontWeight:"600", borderWidth:2, borderRadius:12, padding:4}}>{item.date}</Text>
                  

                
              </View>
  

            </View>
            
          )}
          keyExtractor={(item)=> item.id}
          ItemSeparatorComponent = {()=> {
            return(
              <View style={{height:5, width:"100%", backgroundColor:"black", marginBottom:15 }}/>

              
            )
          }}
          ListEmptyComponent = {() => {
            return(
              <View style={{height:50, width:"100%", backgroundColor:"black", marginBottom:15, flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:"white"}}>No data available</Text>
              </View>

              
            )
          }}
          horizontal = {false}
          ref = {FlatListRef}
         
          
        
        
        />
      </View>
    </SafeAreaView>
    
  )
}

export default App