import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import TopBar from '../../../components/TopBar';
import Filters from '../../../components/Filters';
import ImageGallery from '../../../components/Cuisines/ImageGallery';
import PopularMeal from '../../../components/main/PopularMeal';

const CountryDishes = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TopBar title="American"  navigation={navigation}/>
        <Filters />
        <PopularMeal />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    padding:10,
    paddingTop:20
}
})

export default CountryDishes