import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

const ImageGallery = () => {
    const images = [
        { id: 1, source: require('../../assets/images/meal/img1.png'),text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km"},
        { id: 2, source: require('../../assets/images/meal/img2.png'),text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user2.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km" },
        { id: 3, source: require('../../assets/images/meal/img3.png'),text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km" },
        { id: 4, source: require('../../assets/images/meal/img4.png'),text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km" },
        { id: 5, source: require('../../assets/images/meal/img5.png') ,text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km"},
        { id: 6, source: require('../../assets/images/meal/img6.png'),text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km" },
        { id: 7, source: require('../../assets/images/meal/img7.png') ,text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km"},
        { id: 8, source: require('../../assets/images/meal/img8.png') ,text:"Lotteria - 124 Sandiago" ,userimg: require('../../assets/images/orders/user1.png'), username:"kjdnkj", rating:"3.4",totelratings:"(324)" , location:"1.2km"},
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
                            <View style={styles.user}>
                                <Image source={image.userimg} />
                                <Text>{image.username}</Text>
                            </View>
                            <View style={styles.rating}>
                                <Image source={require('../../assets/images/star.png')} />
                                <Text style={{ fontSize: 12 }}>{image.rating}</Text>
                                <Text style={{ fontSize: 12 }}>{image.totelratings}</Text>
                                <Image style={styles.locimg} source={require('../../assets/images/location.png')} />
                                <Text style={{ fontSize: 12 }}>{image.location}</Text>
                            </View>
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
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        height:280,
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
    user: {
        marginTop: 10,
        flexDirection: "row",
        gap: 10,
    },
    rating: {
        marginTop: 10,
        flexDirection: 'row',
        fontSize: 5,
    },
    locimg: {
        marginLeft: 10,
        marginTop: 2,
    }
});

export default ImageGallery;