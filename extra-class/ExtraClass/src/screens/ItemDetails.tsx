import { View, Text, Image, TouchableOpacity } from "react-native"
import FontAwesome from "@react-native-vector-icons/fontawesome";
const ItemDetails = ({ route, navigation }: any) => {
    //Always use Goback
    const GOBack = () => {
        navigation.goBack()
    }
    const { itemDetails } = route.params;
    console.log(route.params, "_________________________>>>>>>>>>>>>>>Route")


    console.log(`This is navigation_________________>>>>>>>> ${navigation}`)
    return (
        <View style={{backgroundColor:"#bfac31ff"}}>
        <View style={{ height: "100%", padding: 20, backgroundColor: "#e2dfdcff", marginTop:50, borderTopLeftRadius:20, borderTopRightRadius:20 }}>
            <Image style={{ height: "450", borderRadius: 25 }} source={{ uri: itemDetails.strMealThumb }} />

            <View>
                <Text style={{ fontSize: 30, fontWeight: "500", marginTop: 20 }} numberOfLines={1}>{itemDetails.strMeal}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:20}}>
                <Text style={{ fontSize: 20 }}>{itemDetails.strCountry}</Text>
                <Text style={{ fontSize: 20 }}>${itemDetails.idMeal.slice(2)}</Text>
            </View>
            <View>
                <Text style={{fontSize:20, marginTop:20}}>Delivered <Text></Text></Text>
            </View>
            <TouchableOpacity onPress={() => GOBack()} style={{borderWidth:1, padding:2, width:100, borderRadius:12, flexDirection:"row", justifyContent:"center", marginTop:10, backgroundColor:"#82f6f8ff", alignSelf:"center"}}>
                <Text style={{fontSize:20, fontWeight:"500"}}>Go Back</Text>
            </TouchableOpacity>

        </View>
        </View>
    )
}

export default ItemDetails