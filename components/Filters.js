import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const Filters = () => {
    return (
        <View>
            <ScrollView  horizontal>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../assets/images/filter.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option2}>
                        <Text>Short by</Text>
                        <Image style={{marginTop:3}} source={require('../assets/images/arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option3}>
                        <Text style={{color:"white", fontWeight:"600"}}>Near you</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option2}>
                        <Text>Pickup From</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flexDirection:"row",
        gap:10
    },
    option: {
        padding: 15,
        paddingVertical:8,
        backgroundColor: "#E7E7E7",
        borderRadius: 10,
    },
    option2:{
        padding: 15,
        paddingVertical:8,
        backgroundColor: "#E7E7E7",
        borderRadius: 10,
        flexDirection:"row",
        gap:5
    },
    option3:{
        padding: 15,
        paddingVertical:8,
        backgroundColor:"black",
        borderRadius: 10.
    }
})

export default Filters