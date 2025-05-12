import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SectionHeader from './SectionHeader';
import BigHorizontalImage from './BigHorizontalImage';

export const PreviousOrder = () => {
    return (
        <View>
            <SectionHeader title="Your previous orders" />
            <BigHorizontalImage images={[
                {
                    source: require('../../assets/images/orders/img1.png'),
                    text: 'Lotteria - 124 Sandiago',
                    username: 'Leslie Alexander',
                    userimg: require('../../assets/images/orders/user1.png'),
                    rating:"4.3",
                    totelratings:"(35)",
                    location:"4.5km"
                },
                {
                    source: require('../../assets/images/orders/img2.png'),
                    text: 'Lotteria - 124 Sandiago',
                    username: 'Guy Hawkins',
                    userimg: require('../../assets/images/orders/user2.png'),
                    rating:"1.3",
                    totelratings:"(3)",
                    location:"2.3km"
                },
                {
                    source: require('../../assets/images/Cuisines/Asian.png'),
                    text: 'Lotteria - 124 Sandiago',
                    username: 'John Doe',
                    userimg: require('../../assets/images/orders/user3.png'),
                    rating:"4.5",
                    totelratings:"(5)",
                    location:"7.3km"
                },
                {
                    source: require('../../assets/images/orders/img1.png'),
                    text: 'Lotteria - 124 Sandiago',
                    username: 'Leslie Alexander',
                    userimg: require('../../assets/images/orders/user1.png'),
                    rating:"6.2",
                    totelratings:"(654)",
                    location:"1.9km"
                },
                {
                    source: require('../../assets/images/orders/img2.png'),
                    text: 'Lotteria - 124 Sandiago',
                    username: 'Guy Hawkins',
                    userimg: require('../../assets/images/orders/user2.png'),
                    rating:"7.3",
                    totelratings:"(35)",
                    location:"1.7km"
                },
                {
                    source: require('../../assets/images/Cuisines/Asian.png'),
                    text: 'Lotteria - 124 Sandiago',
                    username: 'John Doe',
                    userimg: require('../../assets/images/orders/user3.png'),
                    rating:"4.3",
                    totelratings:"(45)",
                    location:"3.3km"
                },
            ]} />
        </View>
    )
}

export default PreviousOrder