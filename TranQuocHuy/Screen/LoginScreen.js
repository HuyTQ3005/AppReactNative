import { StyleSheet,Image,Button,Alert,Text,View } from "react-native";
import { TextInput,text } from "react-native";
import *  as React from "react";
import {TouchableHighlight,Pressable,TouchableOpacity} from "react-native";
import {useState,useEffect} from "react";
import { GET_ALL } from "../api/apiService";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginScreen = ({navigation}) => {
  const onPress = () => {};
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isPasswordVisible, setPasswordVisible] = useState(false);

    // if (enteredUser === 'h' && enteredPassword === '1') {
    //   navigation.navigate("home");
    // } 
  handleUser = (text) => {
    this.setState({ username: text })
}
handlePassword = (text) => {
    this.setState({ password: text })
}
useEffect(() => {
  GET_ALL("users")
    .then((response) => {
      const responseData = response.data;
      if (responseData && Array.isArray(responseData.content))
        setUserData(responseData.content);
      else
        console.error(
          "Data received from the API is not in a supported format."
        );
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });
}, [isPasswordVisible]);

const onLogin = async() => {
  // await AsyncStorage.setItem('token', user)
  await AsyncStorage.setItem('listUser', JSON.stringify(userData))
  const enteredUser = user;
  const enteredPassword = password;
  userData.forEach((user) => {
    console.log(userData);
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (enteredUser === user.name  && enteredPassword === user.password) {
      Alert.alert("Đăng nhập thành công.");
      navigation.navigate("home");
    }
    else {
      console.log("lỗi");
    }
  });
};
// const tokenLogin = async() =>{
//   const value = await AsyncStorage.getItem('token');
//   if(value !== null) {
//     navigation.navigate('home');
//   } else {
//     return null;
//   }
// };
// tokenLogin();
// const togglePasswordVisibility = () => {
//   setPasswordVisible(!isPasswordVisible);
// };
const goForgotPassword = () => {
  navigation.navigate("ForgotPassword");
};

    return (
    <View style={styles.container}>
        <Image style={styles.image1} source={require('../logo/Phantren1.png')}/>
        <Image style={styles.image2} source={require('../logo/Phantren2.png')}/>
        <Text style={styles.text1}>LOGIN</Text>
        <Text style={styles.text2}>Tên Đăng Nhập</Text>
          <View style={styles.txtInput1}>
          <TextInput
            style={[styles.txtInput]}
            placeholder="Nhập tài khoản"
            autoCapitalize = "none"
            onChangeText={(text) => setUser(text)}

          />
          </View>
        <Text style={styles.text3}>Mật Khẩu</Text>
        <TextInput
          style={[styles.txtInput2]}
          placeholder="Password"
          autoCapitalize = "none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Image style={styles.image3} source={require('../logo/Phantren1.png')}/>
        {/* if(this.state.username&& this.state.password){

        } */}
        {/* if (user =='h' && enteredPassword =='1') 
        { */}
          <TouchableOpacity 
          style={styles.button1}
            onPress={onLogin}
          >
            <Text style={styles.text4}>Login</Text>
          </TouchableOpacity>
        {/* } */}
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Pressable style={styles.newHereRegisterContainer} onClick={() => {}}>
        <Text style={styles.text}>
          <Text style={styles.newHere}>New Here?</Text>
          <Text style={styles.register} 
          onPress={()=>navigation.navigate('Register')}> Register</Text>
        </Text>
      </Pressable>
      <TouchableOpacity
          style={styles.authIcon1}
          onPress={()=>navigation.navigate('home')}
        >
          <Image
            source={require("../logo/logos_facebook.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authIcon2}
          onPress={()=>navigation.navigate('home')}

        >
          <Image
            source={require("../logo/logo_gg.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authIcon3}
          onPress={()=>navigation.navigate('home')}

        >
          <Image
            source={require("../logo/logo_apple.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    flex:1.5,
  },
  image1:{
    position: 'absolute',
    zIndex:2,
    top: -150,
  },
  image2:{
    position: 'absolute',
    zIndex:1,
    top: -150,
  },
  text:{
    top:50
  },
  text1:{
    zIndex:0,
    color:'blue',
    top: 170,
    left: 50,
    fontSize:50,
  },
  text2:{

    zIndex:0,
    color:'blue',
    top: 190,
    left: 55,
    fontSize:15,
  },
  text3:{

    zIndex:0,
    color:'blue',
    top: 200,
    left: 55,
    fontSize:15,
  },
  text4: {
    fontSize:23,
    color:'white',
  },
  image3:{

    zIndex:0,
    transform: [{rotateX: '360deg'}, {rotateZ: '180deg'}],
    top: 210,
  },
  txtInput1: {

    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    margin: 30,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    top: 195,
    left:20,
  },
  txtInput2: {

    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    margin: 30,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    top: 205,
    left: 20,
  },
  button1:{
    zIndex:1,
    top: 70,
    left: 215,
    borderWidth:1,
    borderColor:'white',
    width:170,
    height: 50,
    padding:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  forgotPassword: {
    top: 490,
    left: 225,
    height: 34,
    width: 161,
    textAlign: "left",
    color: 'blue',
    fontWeight: "600",
    position: "absolute",
  },
  newHereRegisterContainer: {
    top: 635,
    left: 20,
    position: "absolute",
  },
  newHere:{
    color: 'white',
  },
  register:{
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  authIcon1: {
    top: 530,
    left: 105,
    width: 40,
    height: 40,
    backgroundColor: '#e8e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    position: "absolute",
  },
  authIcon2: {
    top: 530,
    left: 55,
    width: 40,
    height: 40,
    backgroundColor: '#e8e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    position: "absolute",
  },
  authIcon3: {
    top: 530,
    left: 155,
    width: 40,
    height: 40,
    backgroundColor: '#e8e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    position: "absolute",
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius:5
  },
});
export default LoginScreen;