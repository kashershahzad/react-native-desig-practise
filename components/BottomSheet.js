import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Animated,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

const BottomSheet = ({ visible, onClose, title, children }) => {
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const modalTranslateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  if (!visible) return null;

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="none"
    >
      <View style={styles.modalOverlay}>
        <Pressable style={styles.modalBackground} onPress={onClose} />
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: modalTranslateY }] }
          ]}
        >
          <View style={styles.modalHeader}>
            <View style={styles.modalHandle} />
          </View>
          <View style={styles.optioncontainer}>
            {title && <Text style={styles.modalTitle}>{title}</Text>}
            <View style={styles.option}>
              <Text style={styles.optiontext}>Popular</Text>
              <Image source={require('../assets/images/ratio.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Top Rated</Text>
              <Image source={require('../assets/images/ratio.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Open Now</Text>
              <Image source={require('../assets/images/ratio.png')} />
            </View>
            <View>
              <Image source={require('../assets/images/divider.png')} />
            </View>
          </View>


           <View style={styles.optioncontainer}>
            {title && <Text style={styles.modalTitle}>Sort</Text>}
            <View style={styles.option}>
              <Text style={styles.optiontext}>Price</Text>
              <Image source={require('../assets/images/ratio.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Rating</Text>
              <Image source={require('../assets/images/ratio.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Distance</Text>
              <Image source={require('../assets/images/check.png')} />
            </View>
            <View>
              <Image source={require('../assets/images/divider.png')} />
            </View>
          </View>



           <View style={styles.optioncontainer}>
            {title && <Text style={styles.modalTitle}>Cuisine</Text>}
            <View style={styles.option}>
              <Text style={styles.optiontext}>Hambuger</Text>
              <Image source={require('../assets/images/checkbox.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Onigiri</Text>
              <Image source={require('../assets/images/checkbox.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Meetballs</Text>
              <Image source={require('../assets/images/checkbox.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Spaghetti</Text>
              <Image source={require('../assets/images/checkbox.png')} />
            </View>
            <View style={styles.option}>
              <Text style={styles.optiontext}>Seafood</Text>
              <Image source={require('../assets/images/checkbox.png')} />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Apply Now</Text>
          </TouchableOpacity>

        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
   
  },
  modalHeader: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 5,
  },
  modalContent: {
    flex: 1,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  optiontext: {
    fontWeight: "bold",
    fontSize: 14,
  },
  optioncontainer:{
    gap:16,
  },

  buttontext:{
    color:"white",
    fontWeight:"bold"
  },
  button:{
    margin:10,
    marginTop:15,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#E91D3C",
    paddingVertical:"13",
    borderRadius:10,
  }
  
});

export default BottomSheet;