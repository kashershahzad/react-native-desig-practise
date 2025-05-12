import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const BigHorizontalImage = ({ images }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {images.map((image, index) => (
                    <TouchableOpacity key={index} style={styles.itemContainer}>
                        <Image
                            source={image.source}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>{image.text}</Text>
                        <View style={styles.user}>
                            <Image source={image.userimg} />
                            <Text>{image.username}</Text>
                        </View>
                            <View  style={styles.rating}>
                                <Image source={require('../../assets/images/star.png')} />
                                <Text style={{fontSize:12}}>{image.rating}</Text>
                                <Text style={{fontSize:12}}>{image.totelratings}</Text>
                                <Image style={styles.locimg}source={require('../../assets/images/location.png')} />
                                <Text style={{fontSize:12}}>{image.location}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        marginRight: 15,
        // alignItems: 'center',
        width: 130,
    },
    image: {
        width: 130,
        height: 158,
        borderRadius: 8,
        marginBottom: 5,
    },
    imageText: {
        fontSize: 16,
        color: '#1B1B1B',

        fontWeight: "600",
        marginTop: 5,
    },
    user:{
        marginTop: 10,
        flexDirection:"row",
        gap:10,
    },
    rating:{
        marginTop:10,
        flexDirection:'row',
        fontSize:5,
    },
    locimg:{
        marginLeft:10,
        marginTop:2,
    }
});

export default BigHorizontalImage