import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, Button, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {

  const createacc = () =>{
    navigation.replace('Createacc')
  }

  const forgetpass = () =>{
    navigation.navigate('Restpassmail')
  }
  const [error, seterror] = useState(false)
  const [email, setemail] = useState('')
  const [Password, setPassword] = useState('')

  const handleContinue = () => {
    if (email === '' || Password === '') {
      seterror(true);
    } else {
      navigation.replace('Home')
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbtn}>
        <Image source={require('../../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <View style={styles.signinsection}>
        <Text style={styles.signintitle}>
          Sign in
        </Text>
        <Text style={styles.signinpara}>Don't have an account?
          Create an account</Text>
      </View>
      <View style={styles.inputfeild}>
        <View>
          <Text style={styles.label}>Your Email address</Text>
          <TextInput placeholder='mail@site.com'
            style={[styles.input, error && { borderBottomColor: 'red' }]}
            value={email}
            onChangeText={setemail} 
            keyboardType="email-address" />
          {error && <Text style={styles.error}>Invalid input entered</Text>}
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={Password}
            onChangeText={setPassword}
            secureTextEntry />
        </View>
      </View>
      <TouchableOpacity onPress={forgetpass}>
        <Text style={{ marginTop: 25, color: '#272727', fontSize: 14 }}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continuebtn} onPress={handleContinue}>
        <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.continuewith}>Or continue with</Text>

      <TouchableOpacity style={styles.otherlogin}>
        <Image source={require('../../../assets/images/google.png')} />
        <Text style={styles.otherlogintext}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otherlogin}>
        <Image source={require('../../../assets/images/apple.png')} />
        <Text style={styles.otherlogintext}>Continue with Apple</Text>
      </TouchableOpacity>


      <Text style={styles.continuewith}>Don’t have an account?</Text>

      <TouchableOpacity style={styles.createbtn} onPress={createacc}>
        <Text style={styles.createbtntext}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backbtn: {
    backgroundColor: '#FDE8EC',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  loginBtn: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  signinsection: {
    marginTop: 20,
    gap: 14,
  },
  signintitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  signinpara: {
    fontSize: 12,
    fontWeight: '400'
  },




  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 4,
    fontSize: 16,
  },

  inputfeild: {
    marginTop: 44,
    gap: 12,
  },

  label: {
    color: '#1B1B1B',
    fontSize: 14,
    fontWeight: 400,
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


  continuewith: {
    margin: 12,
    textAlign: 'center',
    color: '#828282'
  },


  otherlogin: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ECECEC'
  },

  otherlogintext: {
    fontSize: 16,
    fontWeight: 600,

  },

  createbtn: {
    padding: 13,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E91D3C',
    justifyContent: 'center',
    borderRadius: 10
  },
  createbtntext: {
    textAlign: 'center',
    fontSize: 16,
    color: "#E91D3C",
    fontWeight: 600,
  },

  error: {
    color: '#F04A3F',
    fontSize: 12,
    fontWeight: 400
  }

});

export default SignInScreen;