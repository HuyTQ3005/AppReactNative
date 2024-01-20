import { StyleSheet,Image,Button,Alert,Text,View, TextInput } from "react-native";
import {TouchableHighlight,Pressable,TouchableOpacity,ScrollView} from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ItemProduct1 from "../item/itemProduct1";
import ItemProduct2 from "../item/itemProduct2";
import { useState, useEffect } from "react";
import { GET_ALL,GET_IMD } from "../api/apiService";

function HomeScreen({navigation}) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setRestaurantData(responseData.content);
        } else {
          console.error("Data received from the API is not in a supported format");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
      console.log(restaurantData);
    }, []);

    const onPress = () => {
      
    }
    const goCart = () => {
      navigation.navigate("Cart");
    };
    const goUser = () => {
      navigation.navigate("User");
    };
    // console.log("ket qua: ",restaurantData)
    return (
        <View style={styles.container1}>
             <View style={styles.tabar}>
          <Entypo style={{left:40,top:10}} name="home" size={30} color="#967259" />
          <AntDesign onPress={()=>navigation.navigate('Cart')} style={{left:80,top:10}} name="shoppingcart" size={30} color="#967259" />
          <AntDesign style={{left:120,top:10}} name="message1" size={30} color="#967259" />
          <AntDesign style={{left:160,top:10}} name="user" size={30} color="#967259" />
        </View>
        <ScrollView style={styles.container2}>
          <View style={styles.row}>
            <TouchableOpacity
                      style={styles.danhmuc}
                      onPress={()=>navigation.goBack()}
                  >
                  <Image
                      source={require("../logo/Danhmuc.png")}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.user}
                      onPress={onPress}
                  >
                  <Image
                      source={require("../logo/logo_user.png")}
                      onPress={()=>navigation.navigate('Account')}
                  />
                  </TouchableOpacity>
            </View>
            
              <Text style={styles.text}>Stumptown Coffee Roasters</Text>
              <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.menuNavShadowBox]}>
            <View style={styles.searchParent}>
            <Image
              style={[styles.searchIcon, styles.searchIconLayout]}
              resizeMode="cover"
              source={require("../logo/Search.png")}
            />
            <TextInput 
            style={styles.findYourCoffee}
            placeholder="Find your coffee..."
            />
          </View>
          </View>
        </View>
              <TouchableOpacity
                  style={styles.authIcon1}
                  onPress={onPress}
              >
                  <Image
                      source={require("../logo/MuclucHome.png")}
                      style={styles.logo}
                  />
              </TouchableOpacity>
        <Text style={styles.special}>
            Special For You
          </Text>

        <View style={[styles.frameParent]}>
          <View style={styles.groupParent}>
            <View style={styles.espressoParent}>
              <Text style={[styles.espresso]}>Espresso</Text>
              <Image
                style={[styles.groupInner, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../logo/Luachon1.png")}
              />
            </View>
            <View style={[styles.latteParent, styles.parentSpaceBlock]}>
              <Text style={[styles.latte]}>Latte</Text>
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../logo/Luachon1.png")}
              />
            </View>
            <View style={[styles.cappuccinoParent, styles.parentSpaceBlock]}>
              <Text style={[styles.latte]}>Cappuccino</Text>
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../logo/Luachon1.png")}
              />
            </View>
            <View style={[styles.cafetireParent, styles.parentSpaceBlock]}>
              <Text style={[styles.latte]}>Cafeteria</Text>
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../logo/Luachon1.png")}
              />
            </View>
          </View> 
        </View>
        <View style={styles.product}>
        {isLoading ? (
            <Text>Loading....</Text>
          ) : (
              restaurantData.map((restaurant, index) => {
                if (index%2 == 0) {
                  return ( 
                  <ItemProduct1 key={index}
                  restaurant={restaurant}
                  goProduct={() => {
                    navigation.navigate("ProductDetail", {idProduct: restaurant.id, item: restaurant});
                  }} 
                  imageSource={GET_IMD("products", restaurant.photo)}
                  textContent1={restaurant.title}
                  textContent2="New"
                  textContent3={restaurant.price}
                  />)
                }
                else
                {
                  return ( <ItemProduct2 key={index}
                    goProduct={() => {
                      navigation.navigate("ProductDetail", {idProduct: restaurant.id, item: restaurant});
                  }} 
                    imageSource={GET_IMD("products", restaurant.photo)}
                    textContent1={restaurant.title}
                    textContent2="New"
                    textContent3={restaurant.price}
                    />)
                }
              }
              )
          )}
        </View>
        </ScrollView>
        
     </View>
    );
};
const styles = StyleSheet.create({
    container1: {
      backgroundColor:'rgba(232,232,232)',
      zIndex:0,
      flex:1,
    },
    product:{
      top:-170,
      marginLeft:10,
    },
    tabar:{
      zIndex:1,
      position:'absolute',
      top:'90.5%',
      height:'8%',
      borderWidth:2,
      width:'90%',
      left:'5%',
      borderRadius:30,
      borderColor: '#967259',
      backgroundColor:'white',
      flexDirection: 'row',
    },
    danhmuc:{
      top:20,
      left:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    user:{
      top:0,
      left:220,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image1:{

        zIndex:0,
        top: 0,
        width: 360,
        height: 1000,
    },
    box: {
        width: 195,
        height: 50,
    },
    row: {
        zIndex:1,
        top: 40,
        left:30,
        width: 310,
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:20,
        flexWrap: 'wrap',
    },
    text: {

        zIndex:1,
        top: 55,
        left: 38,
        fontSize:23,
        fontWeight: 'bold',
    },
    rectangleParent: {
        top: 170,
        left: 20,
        
      },
    groupItemLayout: {
        height: 50,
        width: 268,
      },
    groupItem: {
        borderRadius: 10,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
        height: 50,
        width: 250,
        top: -100,
      },
    menuNavShadowBox: {
        shadowOpacity: 1,
        elevation: 24,
        shadowRadius: 24,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        left: 10,
        
        backgroundColor: 'white',
      },
      searchParent: {
        top: 3,
        left: 18,
        width: 131,
        height: 18,
        
      },
      searchIcon: {
        left: 0,
        top: 10,
        overflow: "hidden",
      },
    
      searchIconLayout: {
        width: 20,
        height: 20,
      },
      findYourCoffee: {
        left: 30,
        color: "grey",
        lineHeight: 15,
        fontSize: 16,
        top: -7,
        textAlign: "left",
        
      },
      authIcon1:{
        top:20,
        left: 285,
        width: 50,
        height: 50,
        backgroundColor: '#967259',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius:25,
        borderBottomStartRadius:15,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        zIndex:0,
      },
      bckspecial:{
        
        zIndex:0,
        top: 270,
        left:5,
        width: 350,
        height: 45,
        alignContent:'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor:'#ffffff',
      },
      special:{
        zIndex:1,
        top:100,
        fontSize:26,
        left:30,
        fontWeight:'bold',
        color: '#000000',
      },     
      frameParent: {
        left: 17,
        
        top: 15,
        width: 333,
        height: 278,
      },
    
      groupParent: {
        left: 0,
        top: 0,
        flexDirection: "row",
        
      },
     espressoParent: {
        width: 65,
        height: 33,
      },
    espresso: {
        fontSize: 15,
        lineHeight: 18,
        left: 0,
        top: 0,
        textAlign: "left",
        
        color: 'brown',
      },
      groupInner: {
        left: 26,
      },
      groupChildLayout: {
        height: 10,
        width: 10,
        top: 10,
        
      },
      latteParent: {
        width: 35,
      },
      parentSpaceBlock: {
        marginLeft: 30,
        height: 18,
      },
      latte: {
        fontSize: 15,
        lineHeight: 15,
        left: 0,
        top: 0,
        color: '#000000',
        
        textAlign: "left",
      },
      ellipseIcon: {
        left: 108,
        display: "none",
      },
      cappuccinoParent: {
        width: 81,
      },
      groupChild1: {
        left: 196,
        display: "none",
      },
      cafetireParent: {
        width: 62,
      },
      groupChild2: {
        left: 297,
        display: "none",
      },
});
export default HomeScreen;
