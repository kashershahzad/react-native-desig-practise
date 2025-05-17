import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const foodItems = [
    {
        id: 2,
        name: "Shaking Beef",
        price: "$8.99",
        rating: 1.2,
        reviews: 92,
        image: require('../../assets/images/cook/food5.png'),
        cartIcon: require('../../assets/images/cook/cart.png'),
    },
    {
        id: 2,
        name: "Shaking Beef",
        price: "$8.99",
        rating: 1.2,
        reviews: 92,
        image: require('../../assets/images/cook/food4.png'),
        cartIcon: require('../../assets/images/cook/cart.png'),
    },
    {
        id: 2,
        name: "Shaking Beef",
        price: "$8.99",
        rating: 1.2,
        reviews: 92,
        image: require('../../assets/images/cook/food3.png'),
        cartIcon: require('../../assets/images/cook/cart.png'),
    },
    {
        id: 2,
        name: "Shaking Beef",
        price: "$8.99",
        rating: 1.2,
        reviews: 92,
        image: require('../../assets/images/cook/food2.png'),
        cartIcon: require('../../assets/images/cook/cart.png'),
    },
    {
        id: 2,
        name: "Shaking Beef",
        price: "$8.99",
        rating: 1.2,
        reviews: 92,
        image: require('../../assets/images/cook/food1.png'),
        cartIcon: require('../../assets/images/cook/cart.png'),
    },
];

const FoodCard = () => {
    return (
        <View style={styles.con}>
            {
                foodItems.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View>
                            <Image source={item.image} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.head}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <View style={styles.contain}>
                                <Image source={require('../../assets/images/star.png')} />
                                <Text style={{ fontSize: 12 }}>{item.rating}</Text>
                                <Text style={{ fontSize: 12 }}>({item.reviews})</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Image style={{ marginTop: 2 }} source={item.cartIcon} />
                                <Text>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: "row",
        padding: 10,
        gap: 10,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 20,
    },
    info: {
        gap: 7,
    },
    contain: {
        flexDirection: "row",
        marginTop: 10,
        gap: 5,
    },
    button: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        gap: 7,
        marginTop: 50,
    },
    head: {
        fontSize: 15,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "#E91D3C",
        fontWeight: "bold",
    },
    con: {
        gap: 15,
    }
})

export default FoodCard