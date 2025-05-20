import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar } from 'react-native';
import ProgressBar from './ProgressBar';
const ratingsData = {
    5: 120, // 120 votes for 5 stars
    4: 10,
    3: 30,
    2: 16,
    1: 35
};
const Rating = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rating}>
                <View style={styles.head}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Rating
                    </Text>
                    <TouchableOpacity onPress={() => navigation.replace('RatingDetails')}>
                        <Text style={{ fontSize: 14, color: "#E91D3C" }}>
                            See All
                        </Text>
                    </TouchableOpacity>
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
                        <Text style={{ fontSize: 12, color: "#666666" }}>
                            Monday - Friday
                        </Text>
                        <Text style={{ fontSize: 12, color: "#666666" }}>
                            6:00 - 19:30
                        </Text>
                    </View>
                    <View style={styles.timecontain}>
                        <Text style={{ fontSize: 12, color: "#666666" }}>
                            Monday - Friday
                        </Text>
                        <Text style={{ fontSize: 12, color: "#666666" }}>
                            6:00 - 19:30
                        </Text>
                    </View>
                </View>
            </View>


            <View style={styles.time}>
                <Text style={styles.timehead}>Adress Details</Text>
                <View style={styles.timecontainer}>
                    <View style={styles.adress}>
                        <Image style={styles.locimg} source={require('../../assets/images//cook/location.png')} />
                        <Text style={{ fontSize: 12 }}>1.3km</Text>
                        <Image style={styles.locimg} source={require('../../assets/images/cook/clock.png')} />
                        <Text style={{ fontSize: 12 }}>24 mins</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            711-2880 Nulla St, Frederick Nebraska 20620
                        </Text>
                    </View>
                    <View>
                        <Image style={{ marginVertical: 10, }} source={require('../../assets/images/cook/map.png')} />
                    </View>
                </View>
            </View>

            <View>
                <View style={styles.rating}>
                    <View style={styles.head}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Rating
                        </Text>
                        <TouchableOpacity onPress={() => navigation.replace('YourRating')}>
                            <Text style={{ fontSize: 14, color: "#E91D3C" }}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.new}>
                        <View style={styles.para}>
                            <Text style={{color:"#727272"}}>
                                This Chef has no user reviews yet. You can only review ordered from this Chef
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/cook/rate.png')}/>
                        </View>
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
    timecontain: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    timecontainer: {
        gap: 5,
        marginTop: 5,
    },
    adress: {
        marginTop: 10,
        flexDirection: 'row',
        fontSize: 5,
        gap: 5,
    },
    locimg: {
        marginTop: 2,
    },
    new:{
        flexDirection:"row",
        gap:10,
    }, 
    para:{
        width:180,
        marginTop:20,
    }

})

export default Rating