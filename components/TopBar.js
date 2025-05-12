import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TopBar = ({title}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/blackleftarrow.png')}/>
        <Text style={styles.title}>{title}</Text>
        <Image source={require('../assets/images/info.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingRight:10,
},
title:{
    fontSize:16,
    fontWeight:600,
}
})

export default TopBar