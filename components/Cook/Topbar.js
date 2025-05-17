import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import BottomSheet from '../BottomSheet';

const TopBar = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  return (
    <View>
      <ScrollView >
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.option} 
            onPress={() => setIsBottomSheetVisible(true)}
          >
            <Image source={require('../../assets/images/filter.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option2}>
            <Text>Short by</Text>
            <Image style={{marginTop:3}} source={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option2}>
            <Text>Sea food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option2}>
            <Text>Soup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <BottomSheet
        visible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        title="Filter"
      >
        <View style={filterStyles.filterOption}>
          <Text>Option 1</Text>
        </View>
        <View style={filterStyles.filterOption}>
          <Text>Option 2</Text>
        </View>
        <View style={filterStyles.filterOption}>
          <Text>Option 3</Text>
        </View>
      </BottomSheet> */}
    </View>
  );
};

// Your existing styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection:"row",
    gap:10,
    marginTop:90,
  },
  option: {
    padding: 15,
    paddingVertical:8,
    backgroundColor: "#E7E7E7",
    borderRadius: 10,
  },
  option2:{
    padding: 15,
    paddingVertical:8,
    backgroundColor: "#E7E7E7",
    borderRadius: 10,
    flexDirection:"row",
    gap:5
  },
  option3:{
    padding: 15,
    paddingVertical:8,
    backgroundColor:"black",
    borderRadius: 10,
  }
});

// Additional styles for filter options
const filterStyles = StyleSheet.create({
  filterOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default TopBar;