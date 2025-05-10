import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/search.png')} 
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search dish name, Chef, cuisines"
        placeholderTextColor="#828282"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
});

export default Searchbar;