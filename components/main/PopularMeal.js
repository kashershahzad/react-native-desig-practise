import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import ImageGallery from './ImageGallery';

const PopularMeal = () => {
    return (
        <View style={styles.container} >
            <SectionHeader title="Popular Meals" />
            <ImageGallery />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:20
    }
})

export default PopularMeal