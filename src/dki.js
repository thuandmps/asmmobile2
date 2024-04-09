import { View, Text, TextInput, StyleSheet, TouchableOpacity, button } from 'react-native'
import React from 'react'

const dki = ({ navigation }) => {
  return (
    <View>
      <Text>dki</Text>
      <TextInput placeholder='Nhap username'></TextInput>
      <TextInput placeholder='Nhap passswprd'></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('dnhap')}>
      <button title='dang ky'></button>
      </TouchableOpacity>
      <button title='dang nhap' ></button>
    </View>
  )
}

export default dki