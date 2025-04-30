import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Button } from 'react-native';

const SmileDesign = ({navigation}) => {
  const signin = () => {
    navigation.replace('SignIn')
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/creative-world-smile-day-background-with-photo-frame-happy-face-vector_1017-46381.jpg?ga=GA1.1.253538388.1732991066&semt=ais_hybrid&w=740' }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Keep Smiling 😊</Text>
      <Text style={styles.description}>
        A smile is the universal welcome. It costs nothing but creates much. It enriches those who receive without making poorer those who give.
        Start your day with a big smile and share the positivity all around you!
      </Text>
      <Button onPress={signin} title='back to signin' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFDF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'center',
  },
});

export default SmileDesign;
