import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HorizontalImage from './HorizontalImage';
import SectionHeader from './SectionHeader';

const CuisinesSection = () => {
    return (
        <View style={styles.outerContainer}>
            <SectionHeader
                title="Browse by Cuisines"
            // onPress={handleSeeAllPress}
            />
            <HorizontalImage
                images={[
                    { source: require('../../assets/images/Cuisines/Indian.png'), text: 'Indian' },
                    { source: require('../../assets/images/Cuisines/American.png'), text: 'American' },
                    { source: require('../../assets/images/Cuisines/Mexican.png'), text: 'Mexican' },
                    { source: require('../../assets/images/Cuisines/Asian.png'), text: 'Asian' },
                    { source: require('../../assets/images/Cuisines/Indian.png'), text: 'Indian' },
                    { source: require('../../assets/images/Cuisines/American.png'), text: 'American' },
                    { source: require('../../assets/images/Cuisines/Mexican.png'), text: 'Mexican' },
                    { source: require('../../assets/images/Cuisines/Asian.png'), text: 'Asian' },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        marginVertical: 10,
    },
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
})

export default CuisinesSection;