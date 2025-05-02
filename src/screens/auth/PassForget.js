import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Backbutton from '../../../components/Backbutton';

const PassForget = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Check if all code fields are filled
  const isCodeComplete = code.every(digit => digit !== '');

  const handleContinue = () => {
    if (isCodeComplete) {
      // Handle continue action here
      console.log('Verification code:', code.join(''));
    }
  };

  return (
    <View style={style.container}>
      <Backbutton />
      <View style={style.heading}>
        <Text style={style.title}>Reset new password</Text>
        <Text style={style.para}>Enter your verification code Sign in</Text>
      </View>
      <Text style={style.des}>
        A text with verification code was sent to the phone number xxx - xxx- 5432 & your registered email as well
      </Text>

      <View style={style.codeContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={style.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            placeholder="0"
            value={code[index]}
            onChangeText={(text) => handleCodeChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            textAlign="center"
          />
        ))}
      </View>

      <Text style={style.veri}>Didn't receive verification code?</Text>
      <TouchableOpacity 
        style={[style.continuebtn, { opacity: isCodeComplete ? 1 : 0.5 }]}
        onPress={handleContinue}
        disabled={!isCodeComplete}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

// ... (keep the same styles)

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  heading: {
    marginTop: 20,
    gap: 7,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#1B1B1B',
    fontFamily: "General Sans"
  },
  para: {
    fontSize: 12,
    fontWeight: "400",
    color: "#171717"
  },
  des: {
    fontSize: 12,
    fontWeight: '400',
    color: "#565656",
    marginTop: 45,
  },
  codeInput: {
    borderBottomWidth: 1,
    width: 46,
    fontSize: 24,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },

  veri:{
    textAlign:"center",
    fontSize: 14,
    color:"#E91D3C",
  },
  continuebtn:
  {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91D3C',
    padding: 13,
    borderRadius: 10,
    opacity: 0.5
  },
});

export default PassForget;