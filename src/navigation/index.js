import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import SplashScreen from "../screens/SplashScreen";

import React from 'react'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,

            }} initialRouteName="MainStack">
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="MainStack" component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
