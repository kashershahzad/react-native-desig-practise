import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Backbutton from '../../../components/Backbutton';

const Restpassmail = ({navigation}) => {

    const nxtpage = () =>{
navigation.replace('PassForget')
    }
    return (
        <View style={style.container}>
            <Backbutton />
            <View style={style.heading}>
                <Text style={style.title}>Reset your password</Text>
                <Text style={style.para}>Enter your Phone number or Email to reset password
                    Sign in</Text>
            </View>
            <View style={style.inputfeild}>
                <View>
                    <Text style={style.label}>Phone number or Email</Text>
                    <TextInput placeholder='Enter your email or phone number'
                        style={style.input}
                        keyboardType="email-address"
                    />
                </View>
            </View>
            <TouchableOpacity style={style.continuebtn} onPress={nxtpage}>
                <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    heading: {
        marginTop: 20,
        gap: 7,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#1B1B1B',
        fontFamily: "General Sans"
    },
    para: {
        fontSize: 11,
        fontWeight: "400",
        color: "#171717"
    },

    continuebtn:
    {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E91D3C',
        padding: 13,
        borderRadius: 10,
        opacity: 0.5
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 4,
        fontSize: 12,
    },

    inputfeild: {
        marginTop: 44,
        gap: 12,
    },

    label: {
        color: '#1B1B1B',
        fontSize: 14,
        fontWeight: 400,
        marginBottom:5,
    },

})

export default Restpassmail