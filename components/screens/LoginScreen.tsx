import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const navigation: any = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Sign')
    console.log('cliked')
  }
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
      <Image source={require('../../assets/images/vector.png')} style={styles.topImage} />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloTxt}>Hello</Text>
      </View>

      <View >
        <Text style={styles.signInTxt}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
      <AntDesign name="user" size={24} color={Colors.icon} style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor={Colors.black} />
      </View>

      <View style={styles.inputContainer}>
      <AntDesign name="lock" size={24} color={Colors.icon} style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder='Password' secureTextEntry placeholderTextColor={Colors.black} />
      </View>

      <Text style={styles.forgetPasswordTxt}>Forget your password</Text>

      <View style={styles.signInButtonContainer}>
        <Text style={styles.signTxt}>Sign in</Text>
        <LinearGradient
        style={styles.button}
        colors={['#F97794', '#623AA2',]}
        >
      <AntDesign name="arrowright" size={24} color="#ffffff" />
      </LinearGradient>
      </View>
      <TouchableOpacity  onPress={handleSignIn}>
      <Text style={styles.footerTxt}>
        Don't have an account? <Text style={{textDecorationLine: 'underline'}}>Create</Text> </Text>
      </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bacground,
    flex: 1,
    position: 'relative',
  },

  topImageContainer: {

  },

  topImage: {
    width: '100%',
    height: 130
  },

  helloContainer:{},
  helloTxt: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '400',
    color: Colors.text
  },

  signInTxt: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.text,
    fontWeight: '400',
    marginBottom: 30
  },

  inputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 20,
    alignItems: 'center',
    height: 50
  },
  textInput: {
    flex: 1
  },
  inputIcon: {
    marginLeft: 10,
    marginHorizontal: 10
  },

  forgetPasswordTxt: {
    color: Colors.text,
    textAlign: 'right',
    width: '90%',
    fontSize: 16,
    
  },

  signInButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 120,
    width: '90%',
  },
  signTxt: {
    color: Colors.text,
    fontSize: 25,
    fontWeight: 'bold'
  },

  button: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },

  footerTxt: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 90,
    fontWeight: '500'
  },

  
})