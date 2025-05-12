import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/auth/signin';
import SmileDesign from '../../components/SmileDesign';
import PassForget from '../screens/auth/PassForget';
import Newpass from '../screens/auth/Newpass';
import Restpassmail from '../screens/auth/Restpassmail';

import Createacc from '../screens/auth/Createacc'
import Otp from '../screens/auth/Otp'
import CreateNewpass from '../screens/auth/CreateNewpass'

import Home from '../screens/main/Home';
import Cuisines from '../screens/main/Cuisines';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Restpassmail" component={Restpassmail} options={{headerShown:false}}/>
        <Stack.Screen name="Smile" component={SmileDesign} options={{ headerShown: false }}/>
        <Stack.Screen name="PassForget" component={PassForget} options={{headerShown:false}}/>
        <Stack.Screen name="Newpass" component={Newpass} options={{headerShown:false}}/>


        <Stack.Screen name="Createacc" component={Createacc} options={{headerShown:false}}/>
        <Stack.Screen name="CreateNewpass" component={CreateNewpass} options={{headerShown:false}}/>
        <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>

        {/* Main */}
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Cuisines" component={Cuisines} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
