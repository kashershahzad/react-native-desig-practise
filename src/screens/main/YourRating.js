import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Cookcover from '../../../components/Cook/Cookcover';
import Intro from '../../../components/Cook/Intro';


const YourRating = () => {
  return (
    <ScrollView>
      <View>
        <Cookcover />
        <Intro />
        <View style={styles.container}>
          <Text style={{ fontSize: 14 }}>Lotteria - 124 Sandiago</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Rating detail</Text>
        </View>
        <View style={styles.container2}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>You received the order</Text>
          <Text style={{ fontSize: 14 }}>Order #23241232</Text>
        </View>
        <View style={styles.container2}>
          <Text style={{ fontSize: 12, textAlign: "center" }}>Tell us your feedback</Text>
          <Text style={{ fontSize: 14, textAlign: "center" }}>Let us know how you feel about the Chef's food and service</Text>
          <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
            <Image source={require('../../../assets/images/cook/st.png')} />
            <Image source={require('../../../assets/images/cook/st.png')} />
            <Image source={require('../../../assets/images/cook/st.png')} />
            <Image source={require('../../../assets/images/cook/st.png')} />
            <Image source={require('../../../assets/images/cook/sta.png')} />
          </View>
          <Text style={styles.par}>Write more detail</Text>
        </View>
        <View>
          <TouchableOpacity >
            <Text style={styles.button}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={{marginTop:10, textAlign:"center", paddingBottom:20}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 20,
    marginTop: 100,
    gap: 8,
  },
  container2: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 20,
    marginTop: 20,
    gap: 8,
  },
  par: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  button: {
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "#E91D3C",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold"
  },

})

export default YourRating