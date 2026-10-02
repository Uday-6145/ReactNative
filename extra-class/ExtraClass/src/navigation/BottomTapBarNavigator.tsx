import { View, Text } from 'react-native'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import BestSelller from '../screens/BestSellerScreen'
import OrderHistory from '../screens/OrderHistory'
import HomeScreen from '../screens/HomeScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemDetails from '../screens/ItemDetails';

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()



const HomePagenavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='ItemDetails' component={ItemDetails} />

        </Stack.Navigator>
    )
}



export default function BottomTapBarNavigator() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, title: "", tabBarStyle: { backgroundColor: "#e06614ff", borderTopRightRadius: 25, borderTopLeftRadius: 25, paddingTop: 10 } }}>
            <Tab.Screen name='Home' component={HomePagenavigator}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={{backgroundColor: focused ? "#ffffff":"transparent", height:40, width:60, justifyContent:"center", alignItems:"center", borderRadius:20}}>
                                <Icon name='home' size={30} />
                            </View>
                        )
                    },
                    




                }}
            />


            <Tab.Screen
                name='OrderHistoryScreen'
                component={OrderHistory}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={{backgroundColor: focused ? "#ffffff" : "transparent", justifyContent:"center", alignItems:"center", height:40, width:60, borderRadius:20}}>
                            <Icon name="heart" size={25} />
                            </View>
                        )
                    },
                    tabBarLabel: () => {
                        return (
                            <Text>OverView</Text>
                        )
                    },
                    tabBarBadge: 5,
                    tabBarBadgeStyle: {
                        backgroundColor: "red"
                    },
                    



                }}

            />

            <Tab.Screen name='BestSellerScreen' component={BestSelller}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={{
                                width: 60,
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: focused ? "white" : "transparent",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Icon name="star" size={30} color={"#f7cf04ff"} />
                            </View>
                        )
                    },
                    


                }} />


        </Tab.Navigator>
    )
}