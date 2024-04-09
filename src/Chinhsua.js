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

const Chinhsua = ({ navigation }) => {
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
                    <Text style={[{ marginRight: 150, marginLeft: 75, fontWeight: 'bold', fontSize: 14, color: 'black', }]}>CHỈNH SỮA THÔNG TIN</Text>


                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 30, }}>
                <Image
                    source={require('../accets/images/anhthuan.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 50, marginRight: 0, marginLeft: 150 }}
                />
            </View>


            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 18, width: '80%', fontWeight: 'bold', marginTop: 15 }}>Chỉnh sửa thông tin</Text>

            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Danh Minh Thuận</Text>
            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>minhthuan12012003@gmail.com</Text>
            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Tân chánh hiệp, Quận 12, Hồ Chí Minh</Text>
            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>0334829511</Text>

            <TouchableOpacity style={[styles.Button1]}>
                <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 20, color: 'white', }}>Lưu Thông Tin</Text>
            </TouchableOpacity>



            
        







        </View>

    )
}

export default Chinhsua

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
        margin: 35,
        marginTop: 220,
        marginLeft: 14,
        marginStart: 30,
    },
});