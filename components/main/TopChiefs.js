import React from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import SectionHeader from './SectionHeader';
import BigHorizontalImage from './BigHorizontalImage';
import ChiefImagegallery from './ChiefImagegallery';

const TopChiefs = () => {
  return (
    <View style={styles.container}>
       <SectionHeader title="Top Rated Chefs"/>
                <ChiefImagegallery images={[
                {
                    source: require('../../assets/images/chief/chief1.png'),
                    text: 'Eleanor Pena',
                    rating:"4.3",
                    totelratings:"(35)",
                    location:"4.5km"
                },
                {
                    source: require('../../assets/images/chief/chief2.png'),
                    text: 'Eleanor Pena',
                    rating:"4.3",
                    totelratings:"(35)",
                    location:"4.5km"
                },
                {
                    source: require('../../assets/images/chief/chief1.png'),
                    text: 'Eleanor Pena',
                    rating:"4.3",
                    totelratings:"(35)",
                    location:"4.5km"
                },]}  />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:20
    }
})

export default TopChiefs