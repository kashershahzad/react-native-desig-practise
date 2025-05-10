import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CuisinesSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Browse by Cuisines</Text>
            <TouchableOpacity>
            <Text style={styles.seeall}>See all</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
    margin:15,
    flexDirection: "row",
    flex: 1,
    justifyContent:"space-between",
    },
    heading:{
        color:"#1B1B1B",
        fontSize:18,
        fontWeight: '600',
    },
    seeall: {
        color: "#E91D3C", 
        fontSize: 14
    }

})

export default CuisinesSection