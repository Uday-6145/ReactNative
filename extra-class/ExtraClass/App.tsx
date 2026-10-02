import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import BestSelller from './src/screens/BestSellerScreen'
import OverView from './src/screens/OverView'
import ItemDetails from './src/screens/ItemDetails'
import DrawerNavigator from './src/navigation/DrawerNavigator';
import DeliveryAddress from './src/screens/DrawerScreen/DeliveryAddress';
import MyOrderScreen from './src/screens/DrawerScreen/MyOrderScreen'
import MyProfile from './src/screens/DrawerScreen/MyProfile'
import PaymentMethod from './src/screens/DrawerScreen/paymentMethod';
import ContactScreen from './src/screens/DrawerScreen/ContactScreen';
import Help_FAQ from './src/screens/DrawerScreen/Help_FAQ';
import SettingsScreen from './src/screens/DrawerScreen/SettingsScreen';
import DrawerhomeScreen from './src/screens/DrawerScreen/DrawerhomeScreen'
const Stack = createNativeStackNavigator()


export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='DrawerScreen' >
            <Stack.Screen name='DrawerScreen' component={DrawerNavigator} options={{headerShown:false}}/>
            


            {/* BottomTab-Screen */}
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name='ItemDetails' component={ItemDetails} options={{ headerShown:true ,headerStyle:{backgroundColor:"#dbd7ccff"}}}/>
            <Stack.Screen name='OverView' component={OverView} options={{title:"Welcome", headerStyle:{backgroundColor:"grey"}, headerTitleStyle:{}}}/>
            <Stack.Screen name = 'BestSellerScreen' component={BestSelller}/>
            
            





            {/* DrawerScreen */}
            <Stack.Screen name = 'drawerMyOrder' component={MyOrderScreen}/>
            <Stack.Screen name = 'drawerMyProfile' component={MyProfile}/>
            <Stack.Screen name = 'drawerDeliveryScreen' component={DeliveryAddress}/>
            <Stack.Screen name = 'drawerPaymentMethods' component={PaymentMethod}/>
            <Stack.Screen name = 'drawerContactUs' component={ContactScreen}/>
            <Stack.Screen name = 'drawerHelp_FAQ' component={Help_FAQ}/>
            <Stack.Screen name = 'drawerSettingScreen' component={SettingsScreen}/>
            <Stack.Screen name = 'drawerHomeScreen' component={DrawerhomeScreen}/>
      
        </Stack.Navigator>
        
    </NavigationContainer>

  )
}