import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar } from 'react-native';
import HorizontalImage from '../main/HorizontalImage';

const Intro = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Jacob Jones</Text>
                <View style={styles.rating}>
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ fontSize: 12 }}>4.5</Text>
                    <Text style={{ fontSize: 12 }}>(234)</Text>
                    <Image style={styles.locimg} source={require('../../assets/images/location.png')} />
                    <Text style={{ fontSize: 12 }}>1.3km</Text>
                </View>
            </View>
            <View>
                <Image source={require('../../assets/images/cook/Line.png')} />
                <Text style={styles.name2}>Why I Chef?</Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet consectetur. Odio turpis pellentesque tristique...</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginHorizontal: 15,
        paddingHorizontal:20,
        paddingVertical:25,
        backgroundColor:"#FFFFFF",
        shadowOffset: { width: 0, height: 2 },
        borderRadius:20,
        position:"absolute",
        top:260,
    },

    rating: {
        marginTop: 10,
        flexDirection: 'row',
        fontSize: 5,
    },
    locimg: {
        marginLeft: 10,
        marginTop: 2,
        marginBottom:10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
    },
    para: {
        color:'#828282',
        fontSize: 15,
    },
        name2: {
        paddingTop:10,
        paddingBottom:5,
        fontWeight: "bold",
        fontSize: 18,
    },

});

export default Intro