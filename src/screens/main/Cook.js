import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image } from 'react-native';
import Cookcover from '../../../components/Cook/Cookcover';
import Intro from '../../../components/Cook/Intro';


const Cook = () => {
  return (
    <View>
        <Cookcover />
        <Intro />
    </View>
  )
}

export default Cook