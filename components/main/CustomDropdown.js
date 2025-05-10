import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    StyleSheet,
    Image
} from 'react-native';

const CustomDropdown = ({ options, selectedValue, onSelect }) => {
    const [visible, setVisible] = useState(false);

    const selectedLabel = options.find(o => o.value === selectedValue)?.label || "";

    const handleSelect = (value) => {
        onSelect(value);
        setVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setVisible(true)}
            >
                <View style={styles.container}>
                <Text style={styles.selectedText}>{selectedLabel}</Text>
                <Image style={styles.img} source={require('../../assets/images/arrow-down.png')}/>
                </View>
            </TouchableOpacity>

            <Modal
                transparent
                visible={visible}
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setVisible(false)}
                >
                    <View style={styles.dropdownList}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.dropdownItem}
                                    onPress={() => handleSelect(item.value)}
                                >
                                    <Text style={styles.dropdownText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 10,
        borderColor: '#ccc',
        marginLeft: 10,
        borderRadius: 5,
        // backgroundColor: '#f0f0f0',
        // paddingHorizontal: 10,
        // paddingVertical: 8,
    },
    selectedText: {
        fontSize: 16,
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    dropdownList: {
        backgroundColor: '#fff',
        marginHorizontal: 40,
        borderRadius: 8,
        padding: 10,
        elevation: 5,
    },
    dropdownItem: {
        paddingVertical: 10,
    },
    dropdownText: {
        fontSize: 16,
    },
    container:{
        flexDirection:"row"
    },
    img:{
        margin:7,
        marginLeft:10
    }
});

export default CustomDropdown;
