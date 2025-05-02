import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Backbutton = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            style={styles.backbtn}
            onPress={() => navigation.goBack()}
        >
            <Image source={require('../assets/images/arrow-left.png')} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backbtn: {
        backgroundColor: '#FDE8EC',
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Backbutton;