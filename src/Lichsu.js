import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native'; import React from 'react'

const Lichsu = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <View style={{ backgroundColor: 'white' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                      <Image
                          source={require('../accets/images/back.png')}
                          style={{ width: 30, height: 30, marginRight: 0, marginLeft: 30, }}
                      />
                  </TouchableOpacity>
                  <Text style={[{ marginRight: 150, marginLeft: 85, fontWeight: 'bold', fontSize: 14, color: 'black', }]}>LỊCH SỬ GIAO DỊCH</Text>
              </View>
          </View>


          <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 18, width: '80%', fontWeight: 'bold', marginTop: 15 }}>Chỉnh sửa thông tin</Text>

          <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Thứ 4, 3/4/2024</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 30, }}>
                <Image
                    source={require('../accets/images/c11.png')}
                    style={{ width: 60, height: 60,  marginRight: 0, marginLeft: 30 }}
                />
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <Text style={{ color: 'green', fontSize: 17, }}>Đặt hàng thành công</Text>
                    <Text style={{ color: 'black', fontSize: 15 }}>Spider Plan | <Text style={{ color: 'gray' }}>Ưa bóng</Text></Text>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>2 sản phẩm</Text>
                </View>
            </View>
          <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Thứ 2, 8/4/2024</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 30, }}>
                <Image
                    source={require('../accets/images/c22.png')}
                    style={{ width: 60, height: 60,  marginRight: 0, marginLeft: 30 }}
                />
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <Text style={{ color: 'red', fontSize: 17, }}>Đã hủy đơn hàng</Text>
                    <Text style={{ color: 'black', fontSize: 15 }}>Spider Plan | <Text style={{ color: 'gray' }}>Ưa bóng</Text></Text>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>3 sản phẩm</Text>
                </View>
            </View>
      </View>

  )
}

export default Lichsu

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
  },
  fragmentContainer: {
      backgroundColor: 'white',
  },
  fragmentImage: {
      width: 50,
      height: 40,
      margin: 35,
      marginTop: 220,
      marginLeft: 14,
      marginStart: 30,
  },
});