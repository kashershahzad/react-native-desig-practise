import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ScrollView } from 'react-native';
import Cookcover from '../../../components/Cook/Cookcover';
import Intro from '../../../components/Cook/Intro';
import TopBar from '../../../components/Cook/Topbar';
import FoodCard from '../../../components/Cook/FoodCard';
import Rating from '../../../components/Cook/Rating';
const Cook = () => {
  return (
    <ScrollView>
        <Cookcover />
        <Intro />
        {/* <TopBar /> */}
        {/* <FoodCard /> */}
        <Rating />
    </ScrollView>
  )
}

export default Cook