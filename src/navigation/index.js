import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

import React from 'react'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,

            }} initialRouteName="MainStack">
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="MainStack" component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
