import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
    const { product } = route.params;
    const navigation = useNavigation()


    return (
        <>
            <ScrollView>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                />
                <View style={styles.container}>
                    <Image source={product.source} style={styles.detailImage} />
                    <View style={styles.head2}>
                        <View style={styles.head}>
                            <Text style={styles.title}>{product.text}</Text>
                            <Text style={styles.price}>$12.38</Text>
                        </View>
                        <View>
                            <Text style={{ color: "#A0A0A0" }}>
                                Delicious chicken biryani made with basmati rice, tender chicken, and aromatic spices. Comes with raita (yogurt sauce).
                            </Text>
                        </View>
                    </View>
                    <View style={styles.contain}>
                        <Text style={{ fontSize: 12, }}>Calories</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>560 kcal</Text>
                    </View>
                    <View style={styles.contain}>
                        <Text style={{ fontSize: 12, }}>Portionsleft</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>3</Text>
                    </View>
                    <View style={styles.contain2}>
                        <Text style={{ fontSize: 12, }}>Allergy Info</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Contains Gluten, Dairy, Nuts</Text>
                        <Text style={{ fontSize: 14, color: "#A0A0A0" }}>Prepared in a kitchen that handles peanuts and soy products.</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{fontSize:16, fontWeight:"bold", color:"white"}}>Add to cart</Text>
                            <Text style={{fontSize:16, fontWeight:"bold", color:"white"}}>$12.38</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source={require('../../../assets/images/back3.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     padding: 20,
    //   },
    detailImage: {
        width: 375,
        height: 282,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        position: "absolute",
        top: 40,
        left: 20,
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    head2: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 10,
    },
    contain: {
        backgroundColor: "white",
        marginTop: 3,
        marginHorizontal: 10,
        gap: 10,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    contain2: {
        backgroundColor: "white",
        marginTop: 3,
        marginHorizontal: 10,
        gap: 10,
        padding: 20,
        borderRadius: 10,
        marginBottom: 5,
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        paddingHorizontal: 18,
        paddingVertical: 15,
        backgroundColor: "#E91D3C",
        borderRadius: 10,
        marginTop: 5,
    }

});

export default ProductDetails;