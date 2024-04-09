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

const QA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../accets/images/back.png')}
              style={{ width: 30, height: 30, marginRight: 0, marginLeft: 12,}}
            />
          </TouchableOpacity>
          <Text style={[{ marginRight: 150, marginLeft: 140, fontWeight: 'bold', fontSize: 20, color: 'black', }]}>Q & A</Text>


        </View>

      </View>


      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
        <Text style={{ color: 'black', marginLeft: 16, marginTop: 20, fontSize: 19, width: '80%', fontWeight: 'bold' }}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>
        <Image
          source={require('../accets/images/len.png')}
          style={styles.fragment1}
        />
      </View>
      <Text style={{ color: '#7d7b7b', marginLeft: 16, marginTop: 10, fontSize: 19, width: '80%', fontWeight: 'bold', marginTop: 15 }}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>


      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, }}>
      <Text style={{ color: 'black', marginLeft: 16, marginTop: 10, fontSize: 19, width: '80%', fontWeight: 'bold', marginTop: 15 }}>Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?</Text>
        <Image
          source={require('../accets/images/xuong.png')}
          style={styles.fragment2}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, }}>
      <Text style={{ color: 'black', marginLeft:16, marginTop: 10, fontSize: 19, width: '80%', fontWeight: 'bold', marginTop: 15 }}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>
        <Image
          source={require('../accets/images/xuong.png')}
          style={styles.fragment2}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, }}>
      <Text style={{ color: 'black', marginLeft: 16, marginTop: 10, fontSize: 19, width: '80%', fontWeight: 'bold', marginTop: 15 }}>Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?</Text>
        <Image
          source={require('../accets/images/xuong.png')}
          style={styles.fragment2}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, }}>
      <Text style={{ color: 'black', marginLeft: 16, marginTop: 10, fontSize: 19, width: '80%', fontWeight: 'bold', marginTop: 15 }}>Các sản phẩm Planta có phải là hữu cơ không?</Text>
        <Image
          source={require('../accets/images/xuong.png')}
          style={styles.fragment2}
        />
      </View>




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

  )
}

export default QA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Button1: {
    width: 400,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#7d7b7b',
    borderRadius: 15,
    marginTop: 320
  },
  fragmentContainer: {
    backgroundColor: 'white',
  },
  fragmentImage: {
    width: 50,
    height: 40,
    margin: 25,
    marginTop: 250,
    marginLeft: 25,
    marginStart: 30,
  },
  fragment1: {
    width: 28,
    height:28,
    marginTop: 0,
    marginLeft: 10,
    marginStart: 30,
  },
  fragment2: {
    width: 28,
    height: 28,
    marginTop: 0,
    marginLeft: 10,
    marginStart: 30,
  },
});