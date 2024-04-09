import React, { useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

const Login2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onPressRegiter = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Image
                source={require("../accets/images/2.png")}
                style={styles.logo}
            />
            <Text style={styles.welcomeText} textAlign="center" marginTop={-20}>
                Đăng Kí
            </Text>
            <Text style={styles.welcomeText1} textAlign="center" marginTop={10} marginBottom={40}>
                Tạo tài khoản
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="   Nhập email hoặc số điện thoại"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="   Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="   Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="   Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Text style={{ color: 'black', marginTop: 10, fontSize: 15, alignSelf: 'center', marginLeft: -10, textAlign: 'center', marginBottom: 20, marginBottom: 15, }}>Để đăng ký tài khoản, bạn đồng ý<Text style={{ color: 'green', }}>  Terms &</Text></Text>
                <Text style={{ color: 'black', marginTop: -10, fontSize: 15, alignSelf: 'center', marginLeft: -10, textAlign: 'center', marginBottom: 20, marginBottom: 15, }}><Text style={{ color: 'green', }}>Data Policy</Text> and <Text style={{ color: 'green', }}>Cookies Policy.</Text></Text>


                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.signInText3}>Đăng kí</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={require('../accets/images/line.png')}
                            style={{ width: 130, height: 2, marginRight: 25, marginLeft: 17, }}
                        />
                        <Text style={styles.signInText4}>Hoặc</Text>
                        <Image
                            source={require('../accets/images/line.png')}
                            style={{ width: 130, height: 2, marginRight: 25, marginLeft: 25, }}
                        />

                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.signInButton1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            source={require('../accets/images/ggg.png')}
                            style={{ width: 25, height: 25, marginRight: 25 }}
                        />
                        <Image
                            source={require('../accets/images/face.png')}
                            style={{ width: 25, height: 25, marginRight: 10 }}
                        />
                    </View>
                </TouchableOpacity>


                <Text style={styles.welcomeText2} textAlign="center"> Tôi đã có tài khoản
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.clickableText}> Đăng nhập</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",

    },
    logo: {
        width: 420,
        height: 230,
        // alignSelf: "center",
        // marginTop: 100,
    },
    form: {
        width: "100%",
        height: 150,
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: -30,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "black", // Set text color to white
        textAlign: "center", // Center the text
    },
    welcomeText1: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
    },
    welcomeText2: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: "black", // Set text color to white
        textAlign: "center", // Center the text
    },
    input: {
        alignSelf: "center",
        width: 350,
        height: 50,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 1,
        margin: 7,
        color: "black",
        placeholderTextColor: "black", // Placeholder text color is now white
        borderRadius: 10,
    },
    signInButton: {
        backgroundColor: "#007537",
        padding: 15,
        borderRadius: 15, // Bo tròn góc
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        alignSelf: "center",
        width: 370,
    },
    signInButton1: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15, // Bo tròn góc
        alignItems: "center",
        justifyContent: "center",
        marginTop: -10,
        alignSelf: "center",
        width: 370,
    },
    signInButton2: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15, // Bo tròn góc
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        alignSelf: "center",
        width: 370,
    },
    signInText: {
        color: "#949090",
        fontSize: 13,
        fontWeight: "bold",
    },
    signInText3: {
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
    },
    signInText4: {
        fontSize: 15,
        color: "black",
    },
    signInText1: {
        color: "#009245",
        fontSize: 13,
        fontWeight: "bold",
    },
    clickableText: {
        color: "#007537",
    }
});

export default Login2;