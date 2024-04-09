import { Pressable, StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Register = ({navigation}) => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RePass, setRePass] = useState("");



  const DangKy = async () => {
    if (Name === '' || Email === '' || Password === '') {
      ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      ToastAndroid.show('Email phải đúng định dạng', ToastAndroid.SHORT);
      return;
    }
    <Image
      style={styles.eyeIcon}
      source={eyeIcon}
    />


  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height '}>

      <ScrollView>


        <View style={styles.body}>
          <Image
            style={styles.imgStyle1}
            source={require("../accets/images/111.png")}
          />



          <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', textAlign: 'center', marginBottom: 20, marginBottom: 15, marginLeft: -270, }}>Register</Text>


          <TextInput
            style={styles.TextInputStyle}
            placeholder='Email' placeholderTextColor={'#828282'}
            onChangeText={(item) => setName(item)}
          />
          <TextInput
            style={[styles.TextInputStyle, { marginTop: 25 }]}
            placeholder='Password' placeholderTextColor={'#828282'}
            onChangeText={(item) => setEmail(item)}
          />
          <TextInput
            style={[styles.TextInputStyle, { marginTop: 25 }]}
            placeholder='Date of Birth' placeholderTextColor={'#828282'}
            onChangeText={(item) => setEmail(item)}
          />



          <Text style={{ color: '#324a59', marginTop: 10, fontSize: 18, alignSelf: 'center', marginLeft: -40, textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginBottom: 15, }}>By signing up, you agree to our<Text style={{ color: 'orange', }}>  Terms,</Text></Text>
          <Text style={{ color: '#324a59', marginTop: -10, fontSize: 18, alignSelf: 'center', marginLeft: -100, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, marginBottom: 15, }}><Text style={{ color: 'orange', }}>Data Policy</Text> and <Text style={{ color: 'orange', }}>Cookies Policy.</Text></Text>


          <TouchableOpacity style={[styles.Button1]} onPress={() => navigation.navigate('Homescreen')}>
            <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 17, fontWeight: 'bold', color: '#F6F1FB', }}>Register</Text>
          </TouchableOpacity>

          <Pressable style={[styles.Button2]}>
            <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 17, fontWeight: 'bold', color: 'blue', }}>Cannel</Text>
          </Pressable>

          <Pressable style={{ marginLeft: 257, marginTop: -31, fontSize: 12 }}>
          </Pressable>

        </View>


      </ScrollView>
    </KeyboardAvoidingView >
  )
}

export default Register

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: 827
  },
  eyeIcon: {
    position: 'absolute',
    right: 30,
    top: 185,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  imgStyle: {
    width: 70,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 210,
    marginTop: 20,
    marginBottom: 20
  },
  imgStyle1: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    marginTop: 20,
    marginBottom: 20
  },
  TextInputStyle: {
    width: 360,
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: '#ccc',
    borderColor: '#ccc',
    // fontStyle:'italic',
    borderWidth: 1,
    alignSelf: 'center',
    fontFamily: 'Poppins',
    color: 'black'
  },
  Button: {
    width: 360,
    height: 60,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 10
  },
  Button1: {
    width: 360,
    height: 60,
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 15,
    marginTop: 10
  },
  Button2: {
    marginTop: -10,
    width: 360,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#ccc',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "blue",
    marginTop: 10
  },
  Button3: {
    marginTop: 10,
    width: 360,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '',
    borderRadius: 25,
    marginBottom: 10,

  }
})