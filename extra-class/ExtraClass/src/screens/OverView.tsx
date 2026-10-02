import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const OverView = ({navigation}:any) => {
    const navigateToViewHistory = () => {
        navigation.navigate('DrawerScreen')
    }
    return (
        <SafeAreaView>
            <View style={{flexDirection:'column', justifyContent:'center', height:"100%", alignItems:"center"}}>
                <View>
                    <Text style={{fontSize: 30, fontWeight:'700' }}>This is a OverView Page</Text>
                </View>

                <View style={{marginTop:50}}>
                    <TouchableOpacity style={{
                        borderWidth:2, padding:5, borderRadius:12
                    }} onPress={navigateToViewHistory}>
                        <Text style={{fontSize:20}}>View History</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

        </SafeAreaView>
    )


    

}

export default OverView