import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Cookcover = () => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
            />
            <ImageBackground
                source={require('../../assets/images/cook/coverimage.jpg')}
                style={styles.container}
                resizeMode="cover"
            >
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <View>
                    <Image source={require('../../assets/images/cook/back.png')} />
                </View>
                </TouchableOpacity>

                <View style={styles.righticon}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/cook/fav.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/cook/info.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 17,
        paddingTop: 45,
        height: 370,
        alignItems: 'flex-start',
    },

    righticon: {
        flexDirection: "row",
        gap: 10,
        marginTop:5,
    }

})

export default Cookcover