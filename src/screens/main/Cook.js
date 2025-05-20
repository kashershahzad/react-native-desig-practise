import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image, ScrollView } from 'react-native';
import Cookcover from '../../../components/Cook/Cookcover';
import Intro from '../../../components/Cook/Intro';
import TopBar from '../../../components/Cook/Topbar';
import FoodCard from '../../../components/Cook/FoodCard';
import Rating from '../../../components/Cook/Rating';

const Cook = ({navigation}) => {
  const [showRating, setShowRating] = useState(false);

  const toggleRatingView = () => {
    setShowRating(!showRating);
  };

  return (
    <ScrollView>
      <Cookcover navigation={navigation} />
      <Intro onWhyChefPress={toggleRatingView} />
      
      {showRating ? (
        <Rating  navigation={navigation}/>
      ) : (
        <>
          <TopBar />
          <FoodCard />
        </>
      )}
    </ScrollView>
  );
};

export default Cook;