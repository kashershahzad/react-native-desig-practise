import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image source={require('../../assets/images/logo.png')} style={style.logo} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91D3C',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
