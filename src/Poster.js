import { Pressable, StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, ScrollView, Platform, ToastAndroid, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Poster = ({ navigation }) => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RePass, setRePass] = useState("");



    const DangKy = async () => {
        if (Name === '' || Email === '' || Password === '') {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            ToastAndroid.show('Email phải đúng định dạng', ToastAndroid.SHORT);
            return;
        }
        <Image
            style={styles.eyeIcon}
            source={eyeIcon}
        />


    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height '}>
                <View style={styles.body}>
                    <Image
                        style={styles.imgStyle1}
                        source={require("../accets/images/pster.png")}
                    />

                    <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold', textAlign: 'center', marginBottom: 5, marginLeft: -10, }}>Harry Potter and the Sorcer...</Text>
                    <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 20, marginBottom: 15, marginLeft: -230, }}>J.K. Rowling</Text>

                    <Image
                        style={styles.imgStyle2}
                        source={require("../accets/images/sao.png")}
                    />

                    <View style={{ flexDirection: 'row', marginLeft: 28, }}>
                        <TouchableOpacity style={[styles.Button1]} >
                            <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 17, fontWeight: 'bold', color: '#F6F1FB', }}>Play Audio</Text>
                        </TouchableOpacity>

                        <Pressable style={[styles.Button2]}>
                            <Text style={{ alignSelf: 'center', lineHeight: 60, fontSize: 17, fontWeight: 'bold', color: 'blue', }}>Read Book</Text>
                        </Pressable>

            
                    </View>
                    <Text style={{ color: '#ccc', fontSize: 20, marginTop: 10,fontWeight: "bold", textAlign: 'center', marginBottom: 10, marginLeft: -250, }}>Summary</Text>
                    <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', textAlign: 'center', marginBottom: 5, marginLeft: -70, }}>Amet minim mollit non deserunt ullamc</Text>
                    <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', textAlign: 'center', marginBottom: 20, marginBottom: 15, marginLeft: -40, }}>est sit aliqua dolor do amet sint. Velit officia</Text>


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
            
            
        </KeyboardAvoidingView >
    )
}

export default Poster

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        height: 827
    },
    eyeIcon: {
        position: 'absolute',
        right: 30,
        top: 185,
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    fragmentContainer: {
        backgroundColor: 'white',
        marginTop: 160,
        marginLeft: 30,
    },
    fragmentImage: {
        width: 50,
        height: 40,
        margin: 35,
        marginTop: 0,
        marginLeft: 48,
        marginStart: 30,
    },
    imgStyle: {
        width: 70,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 210,
        marginTop: 20,
        marginBottom: 20
    },
    imgStyle1: {
        width: 230,
        height: 230,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        marginTop: 40,
        marginBottom: 20
    },
    imgStyle2: {
        width: 190,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: -150,
        marginTop: -10,
        marginBottom: 20
    },
    TextInputStyle: {
        width: 360,
        height: 50,
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#ccc',
        borderColor: '#ccc',
        // fontStyle:'italic',
        borderWidth: 1,
        alignSelf: 'center',
        fontFamily: 'Poppins',
        color: 'black'
    },
    Button: {
        width: 360,
        height: 60,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 10
    },
    Button1: {
        width: 170,
        height: 60,
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 15,
        marginTop: 10
    },
    Button2: {
        marginTop: -10,
        width: 170,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#ccc',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "blue",
        marginTop: 10,
        marginLeft: 10,
    },
    Button3: {
        marginTop: 10,
        width: 360,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '',
        borderRadius: 25,
        marginBottom: 10,

    }
})