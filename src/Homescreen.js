import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {demodata} from './data/demodata';

const Homescreen = ({navigation}) => {
  const [data, setData] = useState(DATA);

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

  const renderItemImage = ({item}) => {
    const {id, imageSource} = item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Poster')}>
        <View>
          <Image
            source={imageSource}
            style={{
              width: 160,
              height: 280,
              marginLeft: 25,
              marginTop: 20,
              marginBottom: 0,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemImage1 = ({item}) => {
    const {id, imageSource} = item;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 20,
          backgroundColor: '#eee',
          width: 350,
          height: 150,
          marginLeft: 25,
        }}>
        <Image
          source={require('../accets/images/lt1.png')}
          style={{
            width: 150,
            height: 120,
            marginRight: 5,
            marginLeft: 10,
            marginTop: 0,
            borderRadius: 5,
          }}
        />

        <Text
          style={[
            styles.signInText,
            {
              marginRight: 0,
              marginLeft: 25,
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            },
          ]}>
          Light Mage{' '}
        </Text>
      </View>
    );
  };

  const handleDemoData = () => {
    demodata.forEach(item => {
      console.log(item);
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={require('../accets/images/111.png')}
          style={{
            width: 80,
            height: 50,
            marginRight: -25,
            marginLeft: 10,
            marginTop: 0,
          }}
        />
        <Image
          source={require('../accets/images/222.png')}
          style={{width: 150, height: 30, marginRight: 75, marginTop: 20}}
        />
        <Image
          source={require('../accets/images/333.png')}
          style={{width: 50, height: 40, marginRight: 0, marginLeft: 40}}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
        <Text
          style={[
            styles.signInText,
            {marginRight: 150, marginLeft: 25, fontSize: 20, color: 'black'},
          ]}>
          Categories
        </Text>
        <Text
          style={[
            styles.signInText1,
            {color: 'blue', fontSize: 17, marginLeft: 30},
          ]}>
          See more
        </Text>
      </View>

      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItemText}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 0}}>
        <Text
          style={[
            styles.signInText,
            {marginRight: 150, marginLeft: 25, fontSize: 20, color: 'black'},
          ]}>
          Recommended For You
        </Text>
        <Text
          style={[
            styles.signInText1,
            {color: 'blue', fontSize: 17, marginLeft: -80},
          ]}>
          See more
        </Text>
      </View>

      <FlatList
        horizontal={true}
        data={IMAGE_DATA}
        renderItem={renderItemImage}
        keyExtractor={item => item.id}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 0}}>
        <Text
          style={[
            styles.signInText,
            {marginRight: 150, marginLeft: 25, fontSize: 20, color: 'black'},
          ]}>
          Best Seller
        </Text>
        <Text
          style={[
            styles.signInText1,
            {color: 'blue', fontSize: 17, marginLeft: 30},
          ]}>
          See more
        </Text>
      </View>

      <FlatList
        horizontal={true}
        data={IMAGE_DATA1}
        renderItem={renderItemImage1}
        keyExtractor={item => item.id}
      />

      {/* <View style={{ flexDirection: 'row', }}>
        <Text style={[styles.signInText, { marginRight: 150, marginLeft: 30, fontSize: 20, color: 'black', }]}>Categories</Text>
        <Text style={[styles.signInText1, { color: 'blue', fontSize: 17, marginLeft: 30, }]}>See more</Text>
      </View> */}

      <View style={styles.fragmentContainer} flexDirection="row">
        <Image
          source={require('../accets/images/Homee.png')}
          style={styles.fragmentImage}
        />
        <Image
          source={require('../accets/images/searc1.png')}
          style={styles.fragmentImage}
        />
        <Image
          source={require('../accets/images/searc.png')}
          style={styles.fragmentImage}
        />
      </View>
    </View>
  );
};

export default Homescreen;

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
    margin: 35,
    marginTop: 0,
    marginLeft: 48,
    marginStart: 48,
  },
});

var DATA = [
  {id: 1, name: 'Art'},
  {id: 2, name: 'Business'},
  {id: 3, name: 'Comedy'},
  {id: 4, name: 'Drama'},
  {id: 5, name: 'Live'},
];
var IMAGE_DATA = [
  {
    id: 1,
    name: 'thuan',
    imageSource: require('../accets/images/lt1.png'),
    price: 120,
  },
  {
    id: 2,
    name: 'thuan',
    imageSource: require('../accets/images/lt2.png'),
    price: 120,
  },
  {
    id: 3,
    name: 'thuan',
    imageSource: require('../accets/images/lt3.png'),
    price: 120,
  },
];
var IMAGE_DATA1 = [
  {
    id: 1,
    name: 'thuan',
    imageSource: require('../accets/images/cf1.png'),
    price: 120,
  },
  // { id: 2, name: 'thuan', imageSource: require('../accets/images/cf2.png'), price: 120, },
  // { id: 3, name: 'thuan', imageSource: require('../accets/images/cf33.jpg'), price: 120, },
  // { id: 2, name: 'thuan', imageSource: require('../accets/images/cf44.jpg'), price: 120, },
];
