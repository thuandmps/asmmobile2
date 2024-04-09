import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {demodata} from './data/demodata';
import PlantAPI from './apis/plantAPI copy';

const Home = ({navigation}) => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllPlants();
    getCategories();
  }, []);

  const getAllPlants = async () => {
    const api = `/get-plants`;
    setIsLoading(true);
    try {
      const res = await PlantAPI.HandleData(api);

      setPlants(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    const api = `/categories`;
    try {
      const res = await PlantAPI.HandleData(api);

      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItemText = ({item}) => {
    const {id, name} = item;
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            padding: 10,
            marginLeft: 20,
            backgroundColor: '#dddddd',
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 20,
          }}>
          {name}
        </Text>
      </View>
    );
  };

  const renderItemImage = item => {
    return (
      <TouchableOpacity
        key={item._id}
        //   onPress={() => navigation.navigate('Panse')}
        onPress={() => console.log(item)}>
        {item.photoURL && (
          <Image
            source={{uri: item.photoURL}}
            style={{
              width: 170,
              height: 180,
              marginLeft: 25,
              marginTop: 20,
              marginBottom: 0,
              resizeMode: 'cover',
            }}
          />
        )}

        <Text
          style={[
            {
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 5,
              width: 170,
            },
          ]}
          numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={[
            {
              fontSize: 14,
              color: 'black',
              marginTop: 0,
            },
          ]}>
          {item.categories.length > 0 &&
            item.categories.map(item => <Text>{item}</Text>)}
        </Text>
        <Text
          style={[
            {
              marginRight: 70,
              marginLeft: 25,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'green',
              marginTop: 0,
            },
          ]}>
          {parseInt(item.price).toLocaleString()}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemImage1 = ({item}) => {
    const {id, imageSource} = item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Panse')}>
        <View>
          <Image
            source={imageSource}
            style={{
              width: 170,
              height: 180,
              marginLeft: 25,
              marginTop: 20,
              marginBottom: 0,
            }}
          />
          <Text
            style={[
              {
                marginRight: 70,
                marginLeft: 25,
                fontSize: 17,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 5,
              },
            ]}>
            Spider Pland
          </Text>
          <Text
            style={[
              {
                marginRight: 70,
                marginLeft: 25,
                fontSize: 14,
                color: 'black',
                marginTop: 0,
              },
            ]}>
            Ưa sáng
          </Text>
          <Text
            style={[
              {
                marginRight: 70,
                marginLeft: 25,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'green',
                marginTop: 0,
              },
            ]}>
            250.000
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemImage2 = ({item}) => {
    const {id, imageSource} = item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Panse')}>
        <View>
          <Image
            source={imageSource}
            style={{
              width: 170,
              height: 180,
              marginLeft: 25,
              marginTop: 20,
              marginBottom: 0,
            }}
          />
          <Text
            style={[
              {
                marginRight: 70,
                marginLeft: 25,
                fontSize: 17,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 5,
              },
            ]}>
            Spider Pland
          </Text>
          <Text
            style={[
              {
                marginRight: 70,
                marginLeft: 25,
                fontSize: 14,
                color: 'black',
                marginTop: 0,
              },
            ]}>
            Ưa sáng
          </Text>
          <Text
            style={[
              {
                marginRight: 70,
                marginLeft: 25,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'green',
                marginTop: 0,
              },
            ]}>
            250.000
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleDemoData = async () => {
    demodata.forEach(async item => {
      const data = {
        title: item.name,
        photoURL: item.similar_images[0].url,
        description: item.details.description,
        count: Math.floor(Math.random() * 1000),
        price: Math.floor(Math.random() * 1000000),
        categories: [1, Math.floor(Math.random() * 5) + 1],
      };

      //   console.log(data);
      await handleAddNewData(data);
    });
  };

  const handleAddNewCategories = async () => {
    const DATA = [
      {id: 1, name: 'Art'},
      {id: 2, name: 'Business'},
      {id: 3, name: 'Comedy'},
      {id: 4, name: 'Drama'},
      {id: 5, name: 'Live'},
    ];

    const api = `/add-category`;

    try {
      DATA.forEach(async item => {
        const newData = {
          title: item.name,
          key: item.id,
        };

        const res = await PlantAPI.HandleData(api, newData, 'post');

        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewData = async data => {
    const api = `/add-new`;

    try {
      const res = await PlantAPI.HandleData(api, data, 'post');

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : plants.length > 0 ? (
        <FlatList
          ListHeaderComponent={
            <View style={{backgroundColor: '#f6f6f6'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 40,
                }}>
                <Text
                  style={[
                    {
                      marginRight: 150,
                      marginLeft: 25,
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'black',
                    },
                  ]}>
                  Planta - toả sáng không gian nhà bạn
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                  <Image
                    source={require('../accets/images/giohang1.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 0,
                      marginLeft: -50,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <Image
                  source={require('../accets/images/hangmsve.png')}
                  style={{
                    width: 150,
                    height: 30,
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                />
              </View>

              <View>
                <Image
                  source={require('../accets/images/h1.png')}
                  style={{
                    width: 380,
                    height: 150,
                    marginLeft: 20,
                    marginTop: 0,
                  }}
                />
              </View>
            </View>
          }
          data={plants}
          numColumns={2}
          renderItem={({item}) => renderItemImage(item)}
        />
      ) : (
        <Text>Data not found!!</Text>
      )}
    </View>
    // <View style={styles.container}>

    //   <TouchableOpacity onPress={() => navigation.navigate('Regular')}>
    //     <Text
    //       style={[
    //         {
    //           marginRight: 150,
    //           marginLeft: 25,
    //           fontSize: 20,
    //           color: 'black',
    //           marginTop: 40,
    //         },
    //       ]}>
    //       Cây trồng
    //     </Text>
    //   </TouchableOpacity>

    //   {/* <ScrollView>
    //     <FlatList
    //       horizontal={true}
    //       data={IMAGE_DATA}
    //       renderItem={renderItemImage}
    //       keyExtractor={item => item.id}
    //     />

    //     <FlatList
    //       horizontal={true}
    //       data={IMAGE_DATA1}
    //       renderItem={renderItemImage1}
    //       keyExtractor={item => item.id}
    //     />

    //     <FlatList
    //       horizontal={true}
    //       data={IMAGE_DATA2}
    //       renderItem={renderItemImage1}
    //       keyExtractor={item => item.id}
    //     />
    //   </ScrollView>

    //   <View style={styles.fragmentContainer} flexDirection="row">
    //     <Image
    //       source={require('../accets/images/menu1.png')}
    //       style={styles.fragmentImage}
    //     />
    //     <TouchableOpacity onPress={() => navigation.navigate('Search')}>
    //       <Image
    //         source={require('../accets/images/menu2.png')}
    //         style={styles.fragmentImage}
    //       />
    //     </TouchableOpacity>
    //     <Image
    //       source={require('../accets/images/menu3.png')}
    //       style={styles.fragmentImage}
    //     />
    //     <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
    //       <Image
    //         source={require('../accets/images/menu44.png')}
    //         style={styles.fragmentImage}
    //       />
    //     </TouchableOpacity>
    //   </View> */}
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topRightImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
  },
  orangeText: {
    color: 'orange',
  },
  welcomeText: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  welcomeText1: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  searchContainer: {
    backgroundColor: '#ccc',
    padding: 10,
    width: 350,
    height: 45,
    marginTop: 10,
    marginLeft: 30,
    marginStart: 30,
    borderRadius: 10,
  },
  searchInput: {
    color: 'black',
    fontSize: 16,
    flex: 1,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  fragmentContainer: {
    backgroundColor: 'white',
  },
  fragmentImage: {
    width: 50,
    height: 40,
    margin: 25,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 24,
    marginStart: 24,
  },
});

var IMAGE_DATA = [
  {
    id: 1,
    name: 'thuan',
    imageSource: require('../accets/images/c11.png'),
    price: 120,
  },
  {
    id: 2,
    name: 'thuan',
    imageSource: require('../accets/images/c22.png'),
    price: 120,
  },
  // { id: 3, name: 'thuan', imageSource: require('../accets/images/c5.png'), price: 120, },
];

var IMAGE_DATA1 = [
  {
    id: 1,
    name: 'thuan',
    imageSource: require('../accets/images/c33.png'),
    price: 120,
  },
  {
    id: 2,
    name: 'thuan',
    imageSource: require('../accets/images/c44.png'),
    price: 120,
  },
  // { id: 3, name: 'thuan', imageSource: require('../accets/images/c6.png'), price: 120, },
];

var IMAGE_DATA2 = [
  {
    id: 1,
    name: 'thuan',
    imageSource: require('../accets/images/c33.png'),
    price: 120,
  },
  {
    id: 2,
    name: 'thuan',
    imageSource: require('../accets/images/c44.png'),
    price: 120,
  },
  // { id: 3, name: 'thuan', imageSource: require('../accets/images/c6.png'), price: 120, },
];
