import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

const ImageGallery = () => {
    const images = [
        { id: 1, source: require('../../assets/images/meal/img1.png'),text:"Indian"},
        { id: 2, source: require('../../assets/images/meal/img2.png'),text:"Asian" },
        { id: 3, source: require('../../assets/images/meal/img3.png'),text:"Mexican" },
        { id: 4, source: require('../../assets/images/meal/img4.png'),text:"Italian" },
        { id: 5, source: require('../../assets/images/meal/img5.png') ,text:"American"},
        { id: 6, source: require('../../assets/images/meal/img6.png'),text:"Indian" },
        { id: 7, source: require('../../assets/images/meal/img7.png') ,text:"Indian"},
        { id: 8, source: require('../../assets/images/meal/img8.png') ,text:"Indian"},
    ];

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    const rows = chunkArray(images, 2);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {rows.map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={styles.imageRow}>
                    {row.map((image) => (
                        <TouchableOpacity key={`image-${image.id}`} style={styles.imageContainer}>
                            <Image source={image.source} style={styles.image} />
                            <Text style={styles.imageText}>{image.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
        paddingTop:20,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        height:200,
    },
    imageContainer: {
        width: '48%',
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    imageText: {
        fontSize: 16,
        color: '#1B1B1B',

        fontWeight: "600",
        marginTop: 5,
    },
});

export default ImageGallery;