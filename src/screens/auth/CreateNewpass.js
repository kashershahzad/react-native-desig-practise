import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Backbutton from '../../../components/Backbutton';

const Newpass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <View style={style.container}>
            <Backbutton />
            <View style={style.heading}>
                <Text style={style.title}>Choose Password</Text>
                <Text style={style.para}>Create your secured 8 digit password
                Sign in</Text>
            </View>
            <View style={style.inputfeild}>
                <View>
                    <Text style={style.label}>Password</Text>
                    <View style={style.inputarea}>
                        <TextInput
                            style={style.input}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            onPress={togglePasswordVisibility}
                            style={style.eyeIcon}
                        >
                            <Image
                                source={require('../../../assets/images/eye.png')}
                                style={style.eyeImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={style.label}>Confirm password</Text>
                    <View style={style.inputarea}>
                        <TextInput
                            style={style.input}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity
                            onPress={toggleConfirmPasswordVisibility}
                            style={style.eyeIcon}
                        >
                            <Image
                                source={require('../../../assets/images/eye.png')}
                                style={style.eyeImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={style.continuebtn} >
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
    input: {
        flex: 1,
        paddingVertical: 4,
        fontSize: 16,
        borderBottomWidth: 0, 
    },
    inputarea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc',
    },
    inputfeild: {
        marginTop: 44,
        gap: 12,
    },
    label: {
        color: '#727272',
        fontSize: 12,
        fontWeight: 400,
    },
    eyeIcon: {
        padding: 8,
    },
    eyeImage: {
        width: 20,
        height: 20,
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
})

export default Newpass