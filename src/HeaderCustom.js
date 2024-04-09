import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HeaderCustom = ({leftIcon, title, rightIcon}) => {
  return (
    <View style={styles.container}>
      {!!leftIcon && <Image source={leftIcon} style={styles.icon}/>}
      <Text>{title}</Text>
      {!!rightIcon && <Image source={rightIcon} style={styles.icon}/>}
    </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
    icon:{
        width: 25,
        height: 25,
    },
    container:{
        flexDirection: "row",
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        margin: 10,
        padding: 10,
    }
})