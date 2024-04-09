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
import React, { useState } from 'react';

const Regular = ({ navigation }) => {

    const [data, setData] = useState(DATA);

    const renderItemText = ({ item }) => {
        const { id, name } = item;
        return (
            <View>
                <Text
                    style={{ color: 'white', fontSize: 17, padding: 8, backgroundColor: 'green', borderRadius: 10, marginTop: 15, marginLeft: 20, }}
                >{name}</Text>
            </View>
        );
    };


    const renderItemImage = ({ item }) => {
        const { id, imageSource } = item;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Panse')}>
                <View>
                    <Image
                        source={imageSource}
                        style={{ width: 170, height: 180, marginLeft: 25, marginTop: 20, marginBottom: 0 }}
                    />
                </View>
                <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 5, }]}>Spider Pland</Text>
                <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 14, color: 'black', marginTop: 0, }]}>Ưa sáng</Text>
                <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 18, fontWeight: 'bold', color: 'green', marginTop: 0, }]}>250.000</Text>


            </TouchableOpacity>
        );
    };

    const renderItemImage1 = ({ item }) => {
        const { id, imageSource } = item;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Panse')}>
                <View>
                    <Image
                        source={imageSource}
                        style={{ width: 170, height: 180, marginLeft: 25, marginTop: 20, marginBottom: 0 }}
                    />
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 5, }]}>Spider Pland</Text>
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 14, color: 'black', marginTop: 0, }]}>Ưa sáng</Text>
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 18, fontWeight: 'bold', color: 'green', marginTop: 0, }]}>250.000</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderItemImage2 = ({ item }) => {
        const { id, imageSource } = item;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Panse')}>
                <View>
                    <Image
                        source={imageSource}
                        style={{ width: 170, height: 180, marginLeft: 25, marginTop: 20, marginBottom: 0 }}
                    />
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 5, }]}>Spider Pland</Text>
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 14, color: 'black', marginTop: 0, }]}>Ưa sáng</Text>
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 18, fontWeight: 'bold', color: 'green', marginTop: 0, }]}>250.000</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderItemImage3 = ({ item }) => {
        const { id, imageSource } = item;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Panse')}>
                <View>
                    <Image
                        source={imageSource}
                        style={{ width: 170, height: 180, marginLeft: 25, marginTop: 20, marginBottom: 0 }}
                    />
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 5, }]}>Spider Pland</Text>
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 14, color: 'black', marginTop: 0, }]}>Ưa sáng</Text>
                    <Text style={[{ marginRight: 70, marginLeft: 25, fontSize: 18, fontWeight: 'bold', color: 'green', marginTop: 0, }]}>250.000</Text>
                </View>
            </TouchableOpacity>
        );
    };




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
                    <Text style={[{ marginRight: 150, marginLeft: 100, fontWeight: 'bold', fontSize: 22, color: 'black', }]}>Cây Trồng</Text>
                    <Image
                        source={require('../accets/images/giohang1.png')}
                        style={{ width: 30, height: 30, marginRight: 0, marginLeft: -50, }}
                    />
                </View>

            </View>

            {/* <Text style={[{ marginRight: 150, marginLeft: 25, fontSize: 20, color: 'black', marginTop: 40, }]}>Cây trồng</Text> */}

            <ScrollView>

                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={renderItemText}
                    keyExtractor={(item) => item.id}
                />
                <FlatList
                    horizontal={true}
                    data={IMAGE_DATA}
                    renderItem={renderItemImage}
                    keyExtractor={(item) => item.id}
                />

                <FlatList
                    horizontal={true}
                    data={IMAGE_DATA1}
                    renderItem={renderItemImage1}
                    keyExtractor={(item) => item.id}
                />

                <FlatList
                    horizontal={true}
                    data={IMAGE_DATA2}
                    renderItem={renderItemImage2}
                    keyExtractor={(item) => item.id}
                />

                <FlatList
                    horizontal={true}
                    data={IMAGE_DATA3}
                    renderItem={renderItemImage3}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    );
};

export default Regular;

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
        color: "black",
        fontWeight: 'bold',
        marginLeft: 30,
    },
    welcomeText1: {
        fontSize: 26,
        color: "black",
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
});

var IMAGE_DATA = [
    { id: 1, name: 'thuan', imageSource: require('../accets/images/c11.png'), price: 120, },
    { id: 2, name: 'thuan', imageSource: require('../accets/images/c22.png'), price: 120, },
    // { id: 3, name: 'thuan', imageSource: require('../accets/images/c5.png'), price: 120, },
];

var IMAGE_DATA1 = [
    { id: 1, name: 'thuan', imageSource: require('../accets/images/c33.png'), price: 120, },
    { id: 2, name: 'thuan', imageSource: require('../accets/images/c44.png'), price: 120, },
    // { id: 3, name: 'thuan', imageSource: require('../accets/images/c6.png'), price: 120, },
];

var IMAGE_DATA2 = [
    { id: 1, name: 'thuan', imageSource: require('../accets/images/c33.png'), price: 120, },
    { id: 2, name: 'thuan', imageSource: require('../accets/images/c44.png'), price: 120, },
    // { id: 3, name: 'thuan', imageSource: require('../accets/images/c6.png'), price: 120, },
];

var IMAGE_DATA3 = [
    { id: 1, name: 'thuan', imageSource: require('../accets/images/c33.png'), price: 120, },
    { id: 2, name: 'thuan', imageSource: require('../accets/images/c44.png'), price: 120, },
    // { id: 3, name: 'thuan', imageSource: require('../accets/images/c6.png'), price: 120, },
];


var DATA = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Hàng mới về' },
    { id: 3, name: 'Ưa sáng' },
    { id: 4, name: 'Ưa tối' },
    { id: 5, name: 'Nhập khẩu' },
]
