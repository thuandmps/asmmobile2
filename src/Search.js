// import React from 'react';
import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const Search = ({ navigation }) => {
    const [searchText, setSearchText] = React.useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Gọi API tìm kiếm
        fetch(`https://example.com/api/search?q=${searchText}`)
            .then(response => response.json())
            .then(data => {
                // Xử lý dữ liệu từ phản hồi của API
                setSearchResults(data.results);
            })
            .catch(error => {
                console.error('Error searching:', error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../accets/images/back.png')}
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Tìm Kiếm</Text>
            </View>

            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập từ khóa tìm kiếm"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            <TouchableOpacity onPress={handleSearch}>
                <Image
                    source={require('../accets/images/kinhlup.png')}
                    style={styles.searchIcon}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 20,
    },
    backButton: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        marginLeft: 110,
    },
    searchBar: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 20,
        marginTop: 0,
    },
});

export default Search;
