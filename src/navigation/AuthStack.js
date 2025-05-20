import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from '../screens/auth/signin';
import SmileDesign from '../../components/SmileDesign';
import PassForget from '../screens/auth/PassForget';
import Newpass from '../screens/auth/Newpass';
import Restpassmail from '../screens/auth/Restpassmail';

import Createacc from '../screens/auth/Createacc'
import Otp from '../screens/auth/Otp'
import CreateNewpass from '../screens/auth/CreateNewpass'
import React from 'react'

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen name="SignInScreen " component={SignInScreen} />
            <Stack.Screen name="SmileDesign" component={SmileDesign} />
            <Stack.Screen name="PassForget" component={PassForget} />
            <Stack.Screen name="Newpass" component={Newpass} />
            <Stack.Screen name="Restpassmail" component={Restpassmail} />
            <Stack.Screen name="Createacc" component={Createacc} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="CreateNewpass" component={CreateNewpass} />
        </Stack.Navigator>
    )
}

export default AuthStack