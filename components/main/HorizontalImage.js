import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const HorizontalImage = ({ images }) => {
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginBottom: 5, 
  },
  imageText: {
    fontSize: 14,
    color: '#1B1B1B',
    textAlign: 'center',
    fontWeight: "400",
    marginTop: 5,
  },
});

export default HorizontalImage;