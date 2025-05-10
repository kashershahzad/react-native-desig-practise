import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Topbar from '../../../components/main/Topbar'

const Home = () => {

    return (
        <View style={styles.container}>
            <Topbar />
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    padding:20
}
});

export default Home;