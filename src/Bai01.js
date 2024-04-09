import { View, Text, Button } from 'react-native'
import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';



const commonOptions = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
  };
  
  const cameraOptions = {
    cameraType: 'front',
    saveToPhotos: true,
    ...commonOptions,
  };

  const openCamera = async () => {
    const respose = await launchImageLibrary(cameraOptions);
    if(respose?.assets){
       console.log(respose.assets);
       setImages(respose.assets);
    }else{
        console.log("Khong co");
    }
  }
  

const Bai01 = () => {
  return (
    <View>
      <Text>Bai01</Text>
      <Button title="chup hinh" onPress={() => openCamera}></Button>
      <Image style={{width: 100, height: 1000}} 
      source={{uri: images?.[0]?.uri ||  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',}}></Image>
    </View>
  )
}

export default Bai01