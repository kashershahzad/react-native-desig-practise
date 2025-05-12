import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Topbar from '../../../components/main/Topbar';
import Searchbar from '../../../components/main/Searchbar';
import PrevousOrder from '../../../components/main/PreviousOrder';
import CuisinesSection from '../../../components/main/CuisinesSection';
import PopularMeal from '../../../components/main/PopularMeal';
import TopChiefs from '../../../components/main/TopChiefs';
import BottomTabBar from '../../../components/main/BottomTabBar';


const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Topbar />
          <Searchbar />
          <CuisinesSection />
          <PrevousOrder />
          <TopChiefs />
          <PopularMeal />
        </ScrollView>
        <BottomTabBar tabs={[
          { image: require('../../../assets/images/bottombar/home.png'), title: "home" },
          { image: require('../../../assets/images/bottombar/search.png'), title: "Search" },
          { image: require('../../../assets/images/bottombar/fav.png'), title: "Favorites" },
          { image: require('../../../assets/images/bottombar/order.png'), title: "Orders" },
          { image: require('../../../assets/images/bottombar/profile.png'), title: "Profile" }
        ]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  //   content: {
  //     flex: 1,
  //     padding: 1,
  //     marginBottom: 60, // Add margin to prevent content from being hidden behind the bottom bar
  //   },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 8, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  tabText: {
    fontSize: 12,
    color: '#333',
  },
});

export default Home;