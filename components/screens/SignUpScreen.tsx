import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';

export default function SignUpScreen() {

  const navigation: any = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Sign')
    console.log('cliked')
  }
  return (
    <View style={styles.container}>
      <View >
      <Image source={require('../../assets/images/vector.png')} style={styles.topImage} />
      </View>
      

      <View >
        <Text style={styles.signInTxt}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
      <AntDesign name="user" size={24} color={Colors.icon} style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor={Colors.black} />
      </View>

      <View style={styles.inputContainer}>
      <MaterialCommunityIcons name="email-outline" size={24} color={Colors.icon} style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor={Colors.black} />
      </View>

      <View style={styles.inputContainer}>
      <Octicons name="device-mobile" size={20} color={Colors.icon} style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder='Mobile' placeholderTextColor={Colors.black} />
      </View>

      <View style={styles.inputContainer}>
      <AntDesign name="lock" size={24} color={Colors.icon} style={styles.inputIcon} />
      <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor={Colors.black} secureTextEntry />
      </View>

    

      <View style={styles.signInButtonContainer}>
        <Text style={styles.signTxt}>Create</Text>
        <LinearGradient
        style={styles.button}
        colors={['#F97794', '#623AA2',]}
        >
      <AntDesign name="arrowright" size={24} color="#ffffff" />
      </LinearGradient>
      </View>
     <Text style={styles.Txt}> Or create account using social media </Text>
     
     <View style={styles.bootomFooterContainer}>
      <Image source={require('../../assets/images/fb.png')}  style={styles.bottomFooter} />
      <Image source={require('../../assets/images/twitter.png')}  style={styles.bottomFooter} />
      <Image source={require('../../assets/images/google.png')}  style={styles.bottomFooter} />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bacground,
    flex: 1,
  
  },

  topImage: {
    width: '100%',
    height: 130
  },

  
  helloTxt: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text
  },

  signInTxt: {
    textAlign: 'center',
    fontSize: 30,
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
    marginTop: 25,
    width: '90%',
  },
  signTxt: {
    color: Colors.text,
    fontSize: 25,
    fontWeight: 'bold',
    
    
  },

  button: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },

  Txt: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 17,
    marginTop: 50,
    fontWeight: '500'
  },

  bootomFooterContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 7,
  
  },


  bottomFooter: {
    width: 45,
    height: 45,
    
  },
})