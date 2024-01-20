import { StyleSheet,Image,Text,View } from "react-native";
import { TouchableOpacity } from "react-native";
import * as React from 'react';

const FirstScreen = ({navigation}) => {
    const handlePress = () => false
    return (
    <View style={styles.container}>
        <Image style={styles.image1} source={require('../logo/Phantren1.png')}/>
        <Image style={styles.image2} source={require('../logo/Phantren2.png')}/>
        <Image style={styles.logo} source={require('../logo/Logo.png')} />
        <Text style={styles.text1}>WELCOM</Text>
        <Text style={styles.text2}>Stumptown Coffee</Text>
        <Text style={styles.text3}>Roasters</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}
          style={styles.button1}>
            <Text style={styles.text4}>GET STARTED</Text>
        </TouchableOpacity>
        {/* <View style={styles.button1}>
        <Button  
          // onPress={this.onPress}
          title="Get Started"  
          onPress={() => navigation.navigate('LoginScreen')}
        /> 
        </View> */}
        <Image style={styles.image3} source={require('../logo/Phantren1.png')}/>
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
    position:'absolute',
    zIndex:0,
    color:'blue',
    top: 340
    ,
    left: 70,
    fontSize:50,
  },
  text2:{
    position:'absolute',
    zIndex:0,
    color:'blue',
    top: 400,
    left: 70,
    fontSize:30,
  },
  text3:{
    position:'absolute',
    zIndex:0,
    color:'blue',
    top: 440,
    left: 70,
    fontSize:30,
  },
  text4: {
    fontSize:16,
    color:'white',
  },
  image3:{
    position:'absolute',
    zIndex:0,
    transform: [{rotateX: '360deg'}, {rotateZ: '180deg'}],
    top: 500,
  },
  button1:{
    position:'absolute',
    zIndex:1,
    top: 610,
    left: 217,
    borderWidth:1,
    borderColor:'white',
    width:130,
    height:50,
    padding:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
});
export default FirstScreen