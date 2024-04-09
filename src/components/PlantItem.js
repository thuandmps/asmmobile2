import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';

const PlantItem = item => {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('window').width / 2,
        padding: 10,
      }}
      onPress={() => console.log(item)}>
      <Image
        source={{uri: item.photoUrl}}
        style={{width: '80%', height: 150}}
      />
      <Text>{item.title}</Text>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );
};

export default PlantItem;
