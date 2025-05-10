import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Topbar = () => {
    const [selectedValue, setSelectedValue] = useState("los_Anglos");

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Pickup to</Text>
            <View style={styles.topbar}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    mode="dropdown"
                >
                    <Picker.Item style={styles.label} label="Los Aneles" value="los_Anglos" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                </Picker>
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
}

const styles = StyleSheet.create({
    // container: {
    //     padding:3,
    // },
    topbar: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -20,
        marginLeft:-10
    },
    picker: {
        flex: 1, // Takes available space
        height: 50,
    },
    label: {
        fontWeight: "800",
    },
    head: {
        fontWeight: "400",
        fontSize: 14,
        marginBottom: 5,
    },
    pickerItem: {
        fontWeight: "600",
        fontSize: 16,
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
});

export default Topbar;