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

const Thanhtoan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image
                            source={require('../accets/images/back.png')}
                            style={{ width: 30, height: 30, marginRight: 0, marginLeft: 30, }}
                        />
                    </TouchableOpacity>
                    <Text style={[{ marginRight: 150, marginLeft: 90, fontWeight: 'bold', fontSize: 22, color: 'black', }]}>Thanh Toán</Text>


                </View>

            </View>



            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'black', width: '80%', marginTop: 30 }}>Thông tin khách hàng</Text>

            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Danh Minh Thuận</Text>

            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Minhthuan1201@gmail.com</Text>

            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>Địa chỉ</Text>

            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 15 }}>SDT</Text>

            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'black', width: '80%', marginTop: 15 }}>Phương thức vận chuyển</Text>


            <Text style={{ color: 'green', marginLeft: 30, marginTop: 10, fontSize: 16,  width: '80%', marginTop: 15 }}>Giao hàng nhanh - 15.000</Text>
            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 0 }}>Dự kiến giao hàng 5-7/4</Text>

            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 16,  width: '80%', marginTop: 15 }}>Giao hàng COD - 20.000</Text>
            <Text style={{ color: '#7d7b7b', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#7d7b7b', width: '80%', marginTop: 0 }}>Dự kiến giao hàng 4-6/4</Text>

            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'black', width: '80%', marginTop: 15 }}>Hình thức thanh toán</Text>

            <Text style={{ color: 'green', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'black',fontWeight: 'bold', width: '80%', marginTop: 15 }}>THẺ VISA/MASTERCARD</Text>

            <Text style={{ color: 'black', marginLeft: 30, marginTop: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'black',fontWeight: 'bold', width: '80%', marginTop: 15 }}>THẺ ATM</Text>











            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 80, }}>
                <Text style={{ color: 'black', marginRight: 150, marginLeft: 12, fontSize: 15, }}>Tạm tính</Text>
                <Text style={{ color: 'black', marginLeft: 120, fontSize: 15, }}>500.000</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, }}>
                <Text style={{ color: 'black', marginRight: 150, marginLeft: 12, fontSize: 15, }}>Phí vận chuyển</Text>
                <Text style={{ color: 'black', marginLeft: 80, fontSize: 15, }}>15.000</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, }}>
                <Text style={{ color: 'black', marginRight: 150, marginLeft: 12, fontSize: 15, fontWeight: 'bold' }}>Tổng Cộng</Text>
                <Text style={{ color: 'black', marginLeft: 105, fontSize: 15, color: 'green', fontWeight: 'bold' }}>515.000</Text>
            </View>



            <TouchableOpacity style={[styles.Button1]} onPress={() => navigation.navigate('Homescreen')}>
                <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 20, color: 'white', }}>Tiếp tục</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Thanhtoan

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
        marginTop: 20
    },
});