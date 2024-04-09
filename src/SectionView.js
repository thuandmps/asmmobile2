import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const SectionView = ({title, data}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      {renderItem(data)}
    </View>
  )
}

const renderItem = (data )=> {
  console.log(data);
    return data.map((item, index) => (
      <View style={styles.container} key={index}>
      <Text>Địa điểm</Text>
      <Text >{item.address}</Text>
      <Text>Thời gian</Text>
      <Text >{item.time}</Text>
     </View>
    ));
   
}

export default SectionView

const styles  = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    container:{
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
})