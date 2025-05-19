import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar } from 'react-native';
import Cookcover from '../../../components/Cook/Cookcover';
import CookRating from '../../../components/Cook/CookRating';


const RatingDetails = () => {
    return (
        <View>
            <Cookcover />
            <CookRating />
            <TouchableOpacity >
                <Text style={style.button}>
                    Write a review
                </Text>
            </TouchableOpacity>
            <Text style={{marginHorizontal:50, textAlign:"center", color:"#727272", marginTop:13, }}>
                you have an order in the last 24 hours from this Chef
            </Text>
        </View>
    )
}

const style= StyleSheet.create({
    button:{
        marginTop:150,
        textAlign:"center",
        backgroundColor:"#E91D3C",
        marginHorizontal:20,
        paddingVertical:15,
        borderRadius:10,
        color:"white",
        fontWeight:"bold"
    }
})

export default RatingDetails