import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes,
    isSuccessResponse,
    isErrorWithCode
} from '@react-native-google-signin/google-signin';





export default function LoginScreen(props: any) {

    useEffect(() => {
        // GoogleSignin.configure();
        GoogleSignin.configure({
            webClientId: '478969402539-u1ofqcjcapaa6suavm766b5oorvimr8n.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
            
        });
    }, [])

    const onPressLogin = async() => {
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            console.log(response, "This is response when pressing login button")
            if(response.data){
                props.navigation.navigate("MainDashboard", {userData : response.data})
            }
        } catch (error) {
            console.log(error, "Login in error")
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // Android only, play services not available or outdated
                        break;
                    default:
                    // some other error happened
                }
            } else {
                // an error that's not related to google sign in occurred
            }
        }
    }
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <GoogleSigninButton style={{}} onPress={() => onPressLogin()} />
        </View>
    )
}