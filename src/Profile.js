import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addAuth} from './redux/reducers/authReducer';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(addAuth(''));
  };

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
                marginLeft: 100,
                fontWeight: 'bold',
                fontSize: 22,
                color: 'black',
              },
            ]}>
            PROFILE
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        <Image
          source={require('../accets/images/anhthuan.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 0,
            marginLeft: 30,
          }}
        />
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
            Danh Minh Thuận
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            minhthuan12012003@gmail.com
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: '#7d7b7b',
          marginLeft: 30,
          marginTop: 10,
          fontSize: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#7d7b7b',
          width: '80%',
          marginTop: 15,
        }}>
        Chung
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Chinhsua')}>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            width: '80%',
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Chỉnh sửa thông tin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            width: '80%',
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Cẩm nang trồng cây
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Lichsu')}>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            width: '80%',
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Lịch sử giao dịch
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('QA')}>
        <Text
          style={{
            color: 'black',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            width: '80%',
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Q & A
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: '#7d7b7b',
          marginLeft: 30,
          marginTop: 10,
          fontSize: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#7d7b7b',
          width: '80%',
          marginTop: 15,
        }}>
        Bảo mật và điều khoản
      </Text>

      <Text
        style={{
          color: 'black',
          marginLeft: 30,
          marginTop: 10,
          fontSize: 18,
          width: '80%',
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        Điều khoản và điều kiện
      </Text>
      <Text
        style={{
          color: 'black',
          marginLeft: 30,
          marginTop: 10,
          fontSize: 18,
          width: '80%',
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        Chính sách quyền riêng tư
      </Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text
          style={{
            color: 'red',
            marginLeft: 30,
            marginTop: 10,
            fontSize: 18,
            width: '80%',
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Đăng xuất
        </Text>
      </TouchableOpacity>

      <View style={styles.fragmentContainer} flexDirection="row">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../accets/images/menu1.png')}
            style={styles.fragmentImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../accets/images/menu2.png')}
            style={styles.fragmentImage}
          />
        </TouchableOpacity>
        <Image
          source={require('../accets/images/menu3.png')}
          style={styles.fragmentImage}
        />
        <Image
          source={require('../accets/images/menu44.png')}
          style={styles.fragmentImage}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Button1: {
    width: 400,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#ababab',
    borderRadius: 15,
    marginTop: 20,
  },
  fragmentContainer: {
    backgroundColor: 'white',
  },
  fragmentImage: {
    width: 50,
    height: 35,
    margin: 20,
    marginTop: 220,
    marginLeft: 40,
    marginStart: 30,
  },
});
