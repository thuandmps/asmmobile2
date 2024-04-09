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
import React from 'react';
import CategoryItem from './components/CategoryItem';

const Panse = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../accets/images/back.png')}
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
            {item.title}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              source={require('../accets/images/giohang1.png')}
              style={{width: 30, height: 30, marginRight: 0, marginLeft: -50}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={{uri: item.photoURL}}
        style={{
          width: 350,
          height: 250,
          marginRight: 0,
          marginLeft: 30,
          marginTop: 10,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          //   alignItems: 'center',
          //   justifyContent: 'center',
          marginTop: 20,
          width: '100%',
        }}>
        {item.categories.map(item => (
          <CategoryItem catId={item} key={`catItem${item}`} />
        ))}
        {/* <Text
          style={{
            marginRight: 150,
            marginLeft: 30,
            backgroundColor: 'green',
            borderRadius: 5,
            width: 80,
            height: 25,
            color: 'white',
            fontSize: 17,
          }}>
          Cây trồng
        </Text>
        <Text
          style={{
            backgroundColor: 'green',
            borderRadius: 5,
            width: 80,
            height: 25,
            color: 'white',
            marginLeft: -140,
            fontSize: 17,
          }}>
          Ưa bóng
        </Text> */}
      </View>
      <Text
        style={{
          color: 'green',
          marginLeft: 30,
          marginTop: 10,
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        {parseInt(item.price).toLocaleString()}
      </Text>

      <Text
        style={{
          color: 'black',
          marginLeft: 30,
          marginTop: 10,
          fontSize: 18,
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          width: '80%',
          marginTop: 10,
        }}>
        Chi tiết sản phẩm
      </Text>
      <Text style={{paddingHorizontal: 16}}>{item.description}</Text>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '80%',
            marginTop: 15,
          }}>
          {item.size ?? 'Nhỏ'}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '80%',
            marginTop: 15,
          }}>
          Xuất xứ {item.source}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '80%',
            marginTop: 15,
          }}>
          Tình trạng <Text style={{color: 'green'}}>Còn {item.count}sp</Text>
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            marginRight: 150,
            marginLeft: 12,
            fontSize: 15,
          }}>
          Đã chọn 1 sản phẩm
        </Text>
        <Text style={{color: 'black', marginLeft: 10, fontSize: 15}}>
          Tạm tính
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 0}}>
        <Image
          source={require('../accets/images/tru.png')}
          style={{
            width: 45,
            height: 45,
            marginRight: 0,
            marginLeft: 10,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            color: 'black',
            marginRight: 150,
            marginLeft: 40,
            fontSize: 26,
          }}>
          0
        </Text>
        <Image
          source={require('../accets/images/cong.png')}
          style={{
            width: 40,
            height: 40,
            marginRight: 0,
            marginLeft: -110,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            color: 'black',
            marginRight: 150,
            marginLeft: 70,
            fontSize: 26,
          }}>
          250.000đ
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.Button1]}
        onPress={() => navigation.navigate('Homescreen')}>
        <Text
          style={{
            alignSelf: 'center',
            lineHeight: 60,
            fontSize: 20,
            color: '#F6F1FB',
          }}>
          Chọn mua
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Panse;

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
