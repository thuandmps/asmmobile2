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
  Alert // Thêm thư viện Alert
} from "react-native";

const Demo = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleLogin = () => {
    // Kiểm tra nếu email hoặc password rỗng
    if (email.trim() === "") {
      setEmailError("Vui lòng nhập email");
      return;
    } else {
      setEmailError(null); // Xóa thông báo lỗi nếu đã nhập
    }
    if (password.trim() === "") {
      setPasswordError("Vui lòng nhập mật khẩu");
      return;
    } else {
      setPasswordError(null); // Xóa thông báo lỗi nếu đã nhập
    }
    
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate('Bai1');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image
        source={require("../accets/images/1.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText} textAlign="center" marginTop={0}>
        Chào mừng bạn
      </Text>
      <Text style={styles.welcomeText1} textAlign="center" marginTop={10} marginBottom={40}>
        Đăng nhập tài khoản
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nhập email hoặc số điện thoại"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}


        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.signInText, { marginRight: 150, marginLeft: 30, }]}>Nhớ tài khoản</Text>
          <Text style={styles.signInText1}>Forgot Password ?</Text>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInText3}>Đăng Nhập</Text>
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
            <TouchableOpacity  onPress={() => navigation.navigate('Google')}>
            <Image
              source={require('../accets/images/face.png')}
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>


        <Text style={styles.welcomeText2} textAlign="center"> Bạn không có tài khoản 
        <TouchableOpacity onPress={() => navigation.navigate('Login2')}> 
        <Text style={styles.clickableText}> Tạo tài khoản</Text>
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
  logo: {
    width: 420,
    height: 370,
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
    color: "black", // Text color is now white
    placeholderTextColor: "black", // Placeholder text color is now white
    borderRadius: 10,
  },
  signInButton: {
    backgroundColor: "#007537",
    padding: 15,
    borderRadius: 15, // Bo tròn góc
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20, // Thêm khoảng cách từ các ô nhập liệu
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
    // marginTop: 15,
  }
});

export default Demo;