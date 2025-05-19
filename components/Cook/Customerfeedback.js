import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar } from 'react-native';
const feedback = [
    {
        id: 1,
        Name: "Wade Warren",
        para: "Setting the stage for the dramatic and revealing first season finale are..."
    },
    {
        id: 2,
        Name: "Dianne Russell",
        para: "Setting the stage for the dramatic and revealing first season finale are..."
    },
    {
        id: 3,
        Name: "Devon Lane",
        para: "Setting the stage for the dramatic and revealing first season finale are..."
    },
    {
        id: 4,
        Name: "Devon Lane",
        para: "Setting the stage for the dramatic and revealing first season finale are..."
    },

]
const Customerfeedback = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>
                    CustomerFeedbacks
                </Text>
            </View>
            {feedback.map((item) => (
                <View style={styles.feedback} key={item.id}>
                    <Image source={require("../../assets/images/cook/divider.png")} />
                    <View style={{ paddingHorizontal: 20, gap: 10, }}>
                        <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10, }}>{item.Name}</Text>
                        <View style={{ flexDirection: "row", gap: 3 }}>
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/star.png')} />
                            <Image source={require('../../assets/images/cook/starhlf.png')} />
                        </View>
                        <Text style={{ color: "#727272" }}>
                            {item.para}
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginTop: 15,
        paddingVertical: 15,
        marginHorizontal: 20,

    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 10,
    },
    feedback: {
        marginTop: 20,
    },
    dishes: {
        borderWidth: 1,
        color: "#A0A0A0",
        padding: 10,
        marginTop: 15,
        borderRadius: 50,
        borderColor: "#A0A0A0",
    }
})

export default Customerfeedback