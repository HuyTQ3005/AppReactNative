import { StyleSheet,Image,Button,Alert,Text,View, TextInput } from "react-native";
import {TouchableHighlight,Pressable,TouchableOpacity,ScrollView} from "react-native";
import * as React from 'react';
import { useState, useEffect } from "react";
import { GET_ALL,GET_IMD } from "../api/apiService";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import ItemProduct1 from "../item/itemProduct1";
import ItemProduct2 from "../item/itemProduct2";

const Cart = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const product = products.map((product) => {
  //   if (product.id === ) {
  //     return product;
  //   }
  // });
  // const imgUrl = (GET_IMD("products", route.params.item.photo));
  useEffect(() => {
    GET_ALL("carts")
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
    const onPress = ()=>{

    }
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.back}
                onPress={()=>navigation.goBack()}>
                <Image
                    style={{tintColor:'#967259'}}
                    source={require('../logo/Back.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.modify}
                onPress={onPress}>
                <Text style={{color:'#967259',fontSize:17}}>Modify</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.message}
                onPress={onPress}>
                <AntDesign name="message1" size={24} color="#967259" />
            </TouchableOpacity>
            <View style={styles.tabar}>
            <AntDesign onPress={()=>navigation.navigate('home')} style={{left:40,top:10}} name="home" size={30} color="#967259" />
          <Entypo style={{left:80,top:10}} name="shopping-cart" size={30} color="#967259" />
          <AntDesign style={{left:120,top:10}} name="message1" size={30} color="#967259" />
          <AntDesign style={{left:160,top:10}} name="user" size={30} color="#967259" />
        </View>
        <ScrollView style={styles.scroll}>
        {isLoading ? (
            <Text>Loading....</Text>
          ) : (
            
              <View>{}</View>
            
              )
          }
        </ScrollView>
        </View>
    )
    };
const styles =StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        // flexDirection:'row',
        flex:1,
      },
      scroll:{
        backgroundColor:'#345733',
        top:-10,
        flex:9,
      },
      back:{
        top: 10,
        left:50,
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#967259'
      },
      modify:{
        top:-15,
        left:210,
        
      },
      message:{
        top:-40,
        left:280
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
    });
export default Cart;