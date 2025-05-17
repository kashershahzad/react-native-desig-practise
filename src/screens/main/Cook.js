import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ScrollView } from 'react-native';
import Cookcover from '../../../components/Cook/Cookcover';
import Intro from '../../../components/Cook/Intro';
import TopBar from '../../../components/Cook/Topbar';
import FoodCard from '../../../components/Cook/FoodCard';
const Cook = () => {
  return (
    <ScrollView>
        <Cookcover />
        <Intro />
        <TopBar />
        <FoodCard />
    </ScrollView>
  )
}

export default Cook