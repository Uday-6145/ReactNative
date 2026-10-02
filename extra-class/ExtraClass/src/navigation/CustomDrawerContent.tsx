import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DrawerData } from '../utilities/customJson'

export default function CustomDrawerContent( props : any) {

    const handlePress = (item:any) => {
        if(item.action == 'logout'){
            props.navigation.closeDrawer()
            Alert.alert('logout ', 'this is a logout button')
            return
        }
        props.navigation.navigate(item.route)
        console.log(props)
        
    }

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: "'#EF501B'" }}>
            <View style={{margin:20, paddingTop:50}}>
                <FlatList
                    data={DrawerData.drawerItems}
                    keyExtractor={(_,index) => `${index}`}
                    renderItem={({item}) => {
                        return (
                            < TouchableOpacity style={style.drawerItem} onPress={() => handlePress(item)}>
                                <View style={style.iconBox}>
                                    <Ionicons name={item.icon} color={'#EF501B'} size={28} />
                                </View>

                                <Text style={style.draweLable}>{item.label}</Text>

                            </TouchableOpacity >
                        )
                    }}

                />

            </View>

        </DrawerContentScrollView>
    )
}


const style = StyleSheet.create({
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#FFBC94"
    },
    iconBox: {
        width: 44,
        height: 44,
        backgroundColor: '#FFF8F3',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    draweLable: {
        fontSize: 19,
        fontWeight: '500',
        marginLeft: 18,
        color: '#FFF8F3',
        flex: 1
    }
})


