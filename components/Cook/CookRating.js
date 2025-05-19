import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar, ScrollView } from 'react-native';
import ProgressBar from './ProgressBar';


const ratingsData = {
    5: 120, // 120 votes for 5 stars
    4: 10,
    3: 30,
    2: 16,
    1: 35
};

const CookRating = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.rating}>
                    <View style={styles.head}>
                        <Text style={{ fontSize: 12, color: "#727272" }}>
                            Lotteria - 124 Sandiago
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Rating Details
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
                    <ScrollView horizontal style={{ flexDirection: "row" }} showsHorizontalScrollIndicator={true}>
                        <View style={{ marginRight: 15 }}>
                            <TouchableOpacity>
                                <Text style={styles.dishes}>Nice Packing (55)</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 15 }}>
                            <TouchableOpacity>
                                <Text style={styles.dishes}>Good taste (5)</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {

        gap: 20,
        position: "absolute",
        top: -110

    },

    rating: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 20,
    },
    head: {
        gap: 5,
        marginBottom: 5,
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
    dishes: {
        borderWidth: 1,
        color: "#A0A0A0",
        padding: 10,
        marginTop: 15,
        borderRadius: 50,
        borderColor: "#A0A0A0",
    }


});

export default CookRating