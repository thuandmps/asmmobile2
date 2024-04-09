import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlantAPI from '../apis/plantAPI copy';

const CategoyDetail = ({navigation, route}) => {
  const {item} = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants();
  }, [item.id]);

  const getPlants = async () => {
    setIsLoading(true);
    const api = `/getAllByCatId?id=${item.id}`;

    try {
      const res = await PlantAPI.HandleData(api);

      setPlants(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../accets/images/back.png')}
              style={{width: 30, height: 30, marginRight: 0, marginLeft: 30}}
            />
          </TouchableOpacity>
          <Text
            style={[
              {
                marginRight: 150,
                marginLeft: 75,
                fontWeight: 'bold',
                fontSize: 22,
                color: 'black',
                flex: 1,
              },
            ]}
            numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : plants.length > 0 ? (
        <FlatList
          data={plants}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Panse', {
                  item,
                })
              }
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                marginVertical: 12,
              }}
              key={item._id}>
              <Image
                source={{uri: item.photoURL}}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  resizeMode: 'cover',
                }}
              />
              <View style={{flex: 1, paddingHorizontal: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {item.title}
                </Text>
                <Text numberOfLines={2}>{item.description}</Text>
                <Text numberOfLines={2}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Data not found</Text>
      )}
    </View>
  );
};

export default CategoyDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Button1: {
    width: 400,
    height: 60,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 15,
    marginTop: 20,
  },
});
