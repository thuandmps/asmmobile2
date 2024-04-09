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

const Cart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require('../accets/images/back.png')}
                            style={{ width: 30, height: 30, marginRight: 0, marginLeft: 30, }}
                        />
                    </TouchableOpacity>
                    <Text style={[{ marginRight: 150, marginLeft: 100, fontWeight: 'bold', fontSize: 22, color: 'black', }]}>Giỏ hàng</Text>
                    <Image
                        source={require('../accets/images/xoa.png')}
                        style={{ width: 30, height: 30, marginRight: 0, marginLeft: -50, }}
                    />
                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, }}>
                <Image
                    source={require('../accets/images/tick.png')}
                    style={{ width: 30, height: 30, marginRight: 30, marginLeft: 30, }}
                />
                <Image
                    source={require('../accets/images/c11.png')}
                    style={{ width: 80, height: 80, marginRight: 10, marginLeft: 0, }}
                />
                <View style={{ flexDirection: 'column', marginTop: -50 }}>
                    <Text style={{ color: 'black', marginRight: 150, marginLeft: 10, fontSize: 15, marginTop: 50 }}>Spider Plant <Text style={{ color: '#ccc' }}>| Ưa bóng</Text></Text>
                    <Text style={{ color: 'green', marginLeft: 10, fontWeight: 'bold', fontSize: 15, }}>250.000đ</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../accets/images/tru.png')}
                            style={{ width: 25, height: 25, marginRight: 0, marginLeft: 10, marginTop: 10, }}
                        />
                        <Text style={{ color: 'black', marginRight: 150, marginLeft: 20, fontSize: 20, marginTop: 8 }}>2</Text>
                        <Image
                            source={require('../accets/images/cong.png')}
                            style={{ width: 25, height: 25, marginRight: 0, marginLeft: -130, marginTop: 10, }}
                        />
                        <Text style={{ color: 'black', marginRight: 150, marginLeft: 25, fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>Xóa</Text>
                    </View>
                </View>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 480, }}>
                <Text style={{ color: 'black', marginRight: 150, marginLeft: 12, fontSize: 15, }}>Tạm tính</Text>
                <Text style={{ color: 'black', marginLeft: 110, fontSize: 17, fontWeight: 'bold' }}>500.000</Text>
            </View>


            <TouchableOpacity style={[styles.Button1]} onPress={() => navigation.navigate('Thanhtoan')}>
                <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 20, color: '#F6F1FB', }}>Tiến hành thanh toán</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Cart

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
        marginTop: 20
    },
});