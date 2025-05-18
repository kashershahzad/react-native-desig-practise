import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ ratings }) => {
  // Example ratings data: {5: 50, 4: 30, 3: 10, 2: 5, 1: 5}
  const totalRatings = Object.values(ratings).reduce((sum, count) => sum + count, 0);
  
  return (
    <View style={styles.container}>
      {[5, 4, 3, 2, 1].map((star) => (
        <View key={star} style={styles.ratingRow}>
          <Text style={styles.starText}>{star}</Text>
          <View style={styles.progressBarBackground}>
            <View 
              style={[
                styles.progressBarFill,
                { 
                  width: `${(ratings[star] / totalRatings) * 100}%`,
                  backgroundColor: getColorForRating(star)
                }
              ]}
            />
          </View>
          {/* <Text style={styles.countText}>{ratings[star] || 0}</Text> */}
        </View>
      ))}
    </View>
  );
};

const getColorForRating = (rating) => {
  // Return different colors based on rating
  const colors = {
    5: '#FFCC00', // Green
    4: '#FFCC00',
    3: '#FFCC00', // Yellow
    2: '#FFCC00',
    1: '#FFCC00'  // Red
  };
  return colors[rating] || '#607D8B';
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    padding: 3,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
  },
//   starText: {
//     width: 40,
//     fontSize: 14,
//     color: '#333',
//   },
  progressBarBackground: {
    // flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    width:142,
    borderRadius: 5,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
//   countText: {
//     width: 30,
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
});

export default ProgressBar;