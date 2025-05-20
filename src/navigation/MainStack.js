import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/main/Home';
import Cuisines from '../screens/main/Cuisines';
import CountryDishes from '../screens/main/CountryDishes';

// COok
import Cook from '../screens/main/Cook';
import RatingDetails from '../screens/main/RatingDetails';
import YourRating from '../screens/main/YourRating';


const MainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cuisines" component={Cuisines} />
            <Stack.Screen name="CountryDishes" component={CountryDishes} />
            <Stack.Screen name="Cook" component={Cook} />
            <Stack.Screen name="RatingDetails" component={RatingDetails} />
            <Stack.Screen name="YourRating" component={YourRating} />
        </Stack.Navigator>
    )
}

export default MainStack