import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BottomTabBar = ({ tabs }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.tabItem}
          onPress={tab.onPress}
        >
          <Image source={tab.image} style={styles.tabIcon} />
          <Text style={styles.tabText}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
    color: '#333',
  },
});

export default BottomTabBar;