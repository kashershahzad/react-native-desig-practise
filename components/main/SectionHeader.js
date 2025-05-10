import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SectionHeader = ({ title, buttonText = "See all", onPress }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.heading}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.seeall}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    heading: {
        color: "#1B1B1B",
        fontSize: 18,
        fontWeight: '600',
    },
    seeall: {
        color: "#E91D3C",
        fontSize: 14
    }
});

export default SectionHeader;