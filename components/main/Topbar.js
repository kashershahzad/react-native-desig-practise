import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomDropdown from './CustomDropdown'; 

const Topbar = () => {
    const [selectedValue, setSelectedValue] = useState("los_Anglos");

    const options = [
        { label: "Los Angeles", value: "los_Anglos" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Pickup to</Text>
            <View style={styles.topbar}>
                <CustomDropdown
                    options={options}
                    selectedValue={selectedValue}
                    onSelect={setSelectedValue}
                />
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/notification-bing.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/menu.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -10,
        marginLeft: -10,
        alignItems: 'center',
    },
    head: {
        fontWeight: '400',
        fontSize: 14,
        marginBottom: 5,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 15,
    },
    container:{
        padding:20,
        paddingBottom:10,
    }
});

export default Topbar;
