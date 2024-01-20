import { StyleSheet,Image,Button,Alert,Text,View } from "react-native";
import { TextInput,text } from "react-native";
import *  as React from "react";
import {TouchableHighlight,Pressable,TouchableOpacity} from "react-native";
import {useState} from "react";
import axios from "axios";

const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress=()=>{

    }
    const onSubmit = () => {
        let fdata={
          name:name,
          email:email,
          password:password
        }
        axios.post("http://172.16.9.15:8080/api/users",fdata).then((response)=>
        {
          if(response.data){
            Alert.alert("Bạn đã đăng ký thành công")
            navigation.navigate("LoginScreen")
          }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
    <View style={styles.container}>
        <Image style={styles.image1} source={require('../logo/Phantren1.png')}/>
        <Image style={styles.image2} source={require('../logo/Phantren2.png')}/>
        <Text style={styles.text1}>REGISTER</Text>
        <Text style={styles.text2}>Tên Đăng Nhập</Text>
          {/* <View style={styles.txtInput1}> */}
          <TextInput
            style={[styles.txtInput1]}
            onChangeText={(value)=>setName(value)}
            placeholder="Nhập tài khoản"
          />
          {/* </View> */}
          <Text style={styles.text3}>Email</Text>
          {/* <View style={styles.txtInput2}> */}
          <TextInput
            style={[styles.txtInput2]}
            onChangeText={(value)=>setEmail(value)}
            placeholder="Email"
          />
          {/* </View> */}
        <Text style={styles.textn}>Mật Khẩu</Text>
        <TextInput
          style={[styles.txtInput3]}
          placeholder="Password"
          onChangeText={(value)=>setPassword(value)}
          secureTextEntry
        />
        <Image style={styles.image3} source={require('../logo/Phantren1.png')}/>
        <TouchableOpacity style={styles.button1} 
          onPress={() => onSubmit()}
          >
            <Text style={styles.text4}>Register</Text>
        </TouchableOpacity>
      <Pressable style={styles.newHereRegisterContainer} onClick={() => {}}>
        <Text style={styles.text}>
          <Text style={styles.newHere}>Already Member?</Text>
          <Text style={styles.register}
            onPress={()=>navigation.goBack()}> Login</Text>
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
  logo:{
    position:'absolute',
    zIndex:0,
    top: 230,
    left: 59,
    width:90,
    height:100,
  },
  text1:{
    zIndex:2,
    color:'blue',
    top: 40,
    left: 50,
    fontSize:50,
  },
  text2:{
    zIndex:0,
    color:'blue',
    top: 40,
    left: 55,
    fontSize:15,
  },
  text3:{
    zIndex:0,
    color:'blue',
    top: 40,
    left: 55,
    fontSize:15,
  },
  textn:{
    zIndex:0,
    color:'blue',
    top: 40,
    left: 55,
    fontSize:15,
    
  },
  text4: {
    fontSize:23,
    color:'white',
  },
  image3:{
    position:'absolute',
    zIndex:0,
    transform: [{rotateX: '360deg'}, {rotateZ: '180deg'}],
    top: 560,
  },
  txtInput1: {
    zIndex:1,
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
    top: 40,
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
    top: 40,
    left: 20,
  },
  txtInput3: {
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
    top: 40,
    left: 20,
  },
  button1:{
    position:'absolute',
    zIndex:1,
    top: 680,
    left: 230,
    borderWidth:1,
    borderColor:'white',
    width:150,
    height: 50,
    padding:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  newHereRegisterContainer: {
    top: 710,
    left: 20,
    position: "absolute",
  },
  newHere:{
    color: 'white',
  },
  register:{
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  authIcon1: {
    top: 570,
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
    top: 570,
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
    top: 570,
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
export default Register;