import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../../components/TopBar';
import Filters from '../../../components/Filters';
import ImageGallery from '../../../components/Cuisines/ImageGallery';

const Cuisines = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TopBar title="Browse by Cuisines"  navigation={navigation}/>
        <Filters />
        <ImageGallery />
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