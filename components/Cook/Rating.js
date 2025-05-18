import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar } from 'react-native';
import ProgressBar from './ProgressBar';
const ratingsData = {
    5: 120, // 120 votes for 5 stars
    4: 80,
    3: 30,
    2: 15,
    1: 10
};
const Rating = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rating}>
                <View style={styles.head}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Rating
                    </Text>
                    <Text style={{ fontSize: 14, color: "#E91D3C" }}>
                        See All
                    </Text>
                </View>
                <View style={styles.contain}>
                    <View>
                        <ProgressBar ratings={ratingsData} />
                    </View>
                    <View style={styles.star}>
                        <Text style={{
                            fontSize: 32, textAlign: "center",
                            fontWeight: "900"
                        }}>
                            4.5
                        </Text>
                        <View style={{ flexDirection: "row", gap: 3 }}>
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/starhlf.png')} />
                        </View>
                        <View>
                            <Text style={{ color: "#727272", fontSize: 12 }}>
                                232 đánh giá
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.time}>
                <Text style={styles.timehead}>Open Hours</Text>
                <View style={styles.timecontainer}>
                    <View style={styles.timecontain}>
                        <Text style={{fontSize:12, color:"#666666"}}>
                            Monday - Friday
                        </Text>
                        <Text style={{fontSize:12, color:"#666666"}}>
                            6:00 - 19:30
                        </Text>
                    </View>
                    <View style={styles.timecontain}>
                        <Text style={{fontSize:12, color:"#666666"}}>
                            Monday - Friday
                        </Text>
                        <Text style={{fontSize:12, color:"#666666"}}>
                            6:00 - 19:30
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        gap: 20,
    },
    rating: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 20,
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contain: {
        flexDirection: "row",
        gap: 10,
    },
    star: {
        marginTop: 10,
        marginLeft: 10,
        gap: 5,
    },


    time: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 20,
    },
    timehead: {
        fontSize: 18,
        fontWeight: "bold"
    },
    timecontain:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    timecontainer:{
        gap:5,
        marginTop:5,
    },

})

export default Rating