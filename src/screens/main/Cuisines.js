import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../../components/TopBar';

const Cuisines = () => {
  return (
    <View style={styles.container}>
        <TopBar title="Browse by Cuisines" />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    padding:10,
    paddingTop:20
}
})

export default Cuisines