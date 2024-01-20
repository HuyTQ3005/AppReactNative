import { StyleSheet,Image,Button,Alert,Text,View, TextInput } from "react-native";
import {TouchableHighlight,Pressable,TouchableOpacity,ScrollView} from "react-native";
import * as React from 'react';
import { useState, useEffect } from "react";
import { GET_ALL,GET_IMD } from "../api/apiService";
import ItemProduct1 from "../item/itemProduct1";
import HomeScreen from "./Home";
import axios from 'axios';

const ProductDetail = ({navigation, route}) => {
    const [quantity, setQuantity] = useState(1);
    const [product_id,setProduct_id]=useState('');
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
const imgUrl = (GET_IMD("products", route.params.item.photo));
const prices = route.params.item.price*quantity;
const productId=route.params.item.id;
console.log(productId);
console.log(quantity);
    const decreaseQuantity = () => {
        if (quantity > 0) 
            setQuantity(quantity - 1);
    };
    // const [restaurantData, setRestaurantData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log("ket qua======", prices);
    const onPress = () => {
      
    }
    const handleAddCart=()=>{
        let fdata={
            qty:quantity,
            price:prices,
            product_id:productId,
          }
          axios.post("http://172.16.9.15:8080/api/carts",fdata).then((response)=>
          {
            if(response.data){
              Alert.alert("Bạn đã thêm vào giỏ hàng thành công")
            }
          })
          .catch((err)=>{
              console.log(err);
          })
    }
    const id = route.params.item.id;
  const title = route.params.item.title;
  const photo = route.params.item.photo;
  const price = route.params.item.price;
//   const imgUrl = GET_IMD("products", route.params.item.photo);
  const addToCart = async () => {
    // var quantity = 1;
    let formdata = {
      id,
      title,
      photo,
      price,
      quantity,
    };
    try {
      // Lấy thông tin giỏ hàng từ AsyncStorage
      const existingCart = await AsyncStorage.getItem("cart");

      // Nếu giỏ hàng đã tồn tại
      if (existingCart != null) {
        // Chuyển đổi chuỗi JSON thành đối tượng
        const cart = JSON.parse(existingCart);

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingProduct = cart.find((item) => item.id === id);

        if (existingProduct) {
          // Nếu sản phẩm đã tồn tại, tăng số lượng
          existingProduct.quantity += 1;
        } else {
          // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
          // cart.push({ id, title, img, price, quantity: 1 });
          cart.push({ ...formdata, quantity: 1 });
        }
        // Lưu giỏ hàng mới vào AsyncStorage
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
      } else {
        // Nếu giỏ hàng chưa tồn tại, tạo mới giỏ hàng
        const newCart = [{ ...formdata, quantity: 1 }];
        // const newCart = [{ ...product, quantity: 1 }];

        // Lưu giỏ hàng mới vào AsyncStorage
        await AsyncStorage.setItem("cart", JSON.stringify(newCart));
      }
      // await AsyncStorage.clear();
      navigation.navigate("Home", { existingCart });
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
      console.log(existingCart);
    } catch (error) {
      alert("Lỗi khi thêm sản phẩm vào giỏ hàng:");
    }
  };
    return (
        <ScrollView style={styles.container}> 
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.back}
                >
                <Image
                    source={require("../logo/Back.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.tym}
                    onPress={onPress}
                >
                <Image
                    source={require("../logo/Tym.png")}
                />
            </TouchableOpacity>
            <View style={styles.image}>
            {isLoading ? (
                <Text>Loading....</Text>
                ) : (
                // <Text>Loading....02</Text>

                    <Image
                    style={{width:"100%",
                        height: 400,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:40}}
                        source={{
                        uri: imgUrl,
                        
                    }}
                    />
                // restaurantData.map((restaurant, index) =>
                //     <ItemProduct1
                //         key={index}
                //         // item={ItemProduct1}
                //         // goProduct={() =>{
                //         //     navigation.navigate()
                //         // }}
                //         imageSource={GET_IMD("products",restaurant.photo)}
                //     />
                    
                // )
                
          )}
            </View>    
            
            <View style={styles.detail}>
                <Text style={styles.txtCf1}>{route.params.item.title}</Text>
                <Text style={styles.txtCf2}>with Milk</Text>
                <Image source={require('../logo/star.png')}
                    style={styles.star} />
                <Text style={styles.txtstar1}>4.7</Text>
                <Text style={styles.txtstar2}>(6.986)</Text>
                <Image source={require('../logo/coffee.png')} style={styles.coffee} />
                <Image source={require('../logo/water.png')} style={styles.water} />
                <Text style={styles.txtcoffee}>Coffee</Text>
                <Text style={styles.txtwater}>Fresh Milk</Text>
                <Text style={styles.txt1}>Medium Roasted</Text>
            </View>
            
            <Text style={styles.txtDescription}>Description</Text>
            <Text style={styles.txt2}>{route.params.item.description}<Text style={{color:'#967259'}}>...More</Text></Text>
            <Text style={styles.txt3}>Choice of Chocolate</Text>
            {/* <ScrollView horizontal style={{top:210,left:10}}> */}
                <Text style={styles.txtchoco}> Dark Chocolate</Text>
                <Text style={styles.txtchoco1}> White Chocolate</Text>
                <Text style={styles.txtchoco2}> Milk Chocolate</Text>
            {/* </ScrollView> */}
            <Text style={[styles.txt4,{left:60}]}>Size</Text>
            <Text style={[styles.txt5,{left:255}]}>Quanity</Text>
            <Text style={styles.sizeM}>M</Text>
            <Text style={styles.sizeL}>L</Text>
            <Text style={styles.sizeXL}>XL</Text>
            <TouchableOpacity
                style={styles.tru}
                onPress={decreaseQuantity}
                
            >
            <Image
                source={require("../logo/Tru.png")}
            />
            </TouchableOpacity>  
            <Text style={styles.slbox}>{quantity}</Text>
                <TouchableOpacity
                    style={styles.cong}
                    onPress={increaseQuantity}
                >
                <Image
                    source={require("../logo/Cong.png")}
                />
                </TouchableOpacity>  
            <Text style={styles.price}>Price</Text>
            <Text style={styles.giam}><Text style={{color:'#967259',fontWeight:400}}>$</Text> {prices}</Text>
                <TouchableOpacity
                    style={{
                        top: -40,
                        left:240,
                        width: 150, 
                        height: 40,
                        backgroundColor: '#967259',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:20,}}
                        onPress={()=>navigation.navigate('Payment', {idProduct: route.params.item.id, item: route.params.item})}
                >
                <Text style={{color:'white',fontSize:21}}>BUY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        top: -80,
                        left:170,
                        width: 65, 
                        height: 40,
                        borderWidth:1,
                        borderColor: '#967259',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:20,}}
                        onPress={()=>addToCart()}
                >
                <Text style={{color:'#967259',fontSize:21}}>+</Text>
                </TouchableOpacity>    
        </ScrollView>
    )
};
const styles =StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        flex:1,
      },
      cong:{
        top: -15,
        left:330,
        width: 30, 
        height: 30,
        backgroundColor: '#967259',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
    },
      tru:{
        top:40,
        left:230,
        width: 30, 
        height: 30,
        backgroundColor: '#967259',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
    },
      sizeM:{
        top:130,
        left:20,
        width:30,
        height:30,
        backgroundColor:'#967259',
        color: 'white',
        borderRadius:20,
        textAlign:'center',
        lineHeight:30,
      },
      sizeL:{
        color:'#777777',
        top:100,
        left:65,
        width:30,
        borderWidth:1,
        borderColor: '#967259',
        height:30,
        borderRadius:20,
        textAlign:'center',
        lineHeight:30,
    },
    sizeXL:{
        color:'#777777',
        top:70,
        left:110,
        width:30,
        borderWidth:1,
        borderColor: '#967259',
        height:30,
        borderRadius:20,
        textAlign:'center',
        lineHeight:30,
    },
      back:{
        zIndex:1,
        top:30,
        left:20,
        width: 40, 
        height: 40,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
    },
    tym:{
        zIndex:1,
        left:300,
        top:-11,
        width: 40, 
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
    },
    image:{
        position: 'absolute',
        width:"90%",
        height: 400,
        zIndex: 0,
        top:0,
        left:15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:40
    },
    detail:{
        zIndex:1,
        top:200,
        height: 120,
        width: "90%",
        left:15,
        borderRadius: 41,
        backgroundColor:'rgba(0,0,0,0.4)',
    },
    txtCf1:{
        top:10,
        left:25,
        fontSize:25,
        color:'white',
    },
    price:{
        top:0,
        left:40,
        color:'#777777',
        fontStyle:'italic',
        fontSize:19
      },
      giam:{
        top:0,
        left:25,
        fontSize:35,
        fontWeight:'bold',
      },
      slbox:{
        top:13,
        left:285,
        fontSize:20
      },
      sBox:{
        
        top: 360,
        left:20,
        width: 30,
        height: 30,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius:20,
        backgroundColor: '#967259',
      },
      sBox1:{
        
        top: 360,
        width: 30,
        height: 30,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius:20,
        backgroundColor: '#D9D9D9',
      },
      choco1:{
        left:20
      },
      choco2:{
        left:140
      },
      choco1:{
        left:280
      },
      txtDescription:{
        top:205,
        left:30,
        fontSize:22,
      },
      txt2:{
        top:205,
        left:40,
        width:335,
        fontSize:14,
        fontStyle: 'italic',
      },
      txtt1:{
        color: '#967259',
      },
      txt3:{
        
        top:210,
        left:15,
        fontSize:20
      },
      txt4:{
        top:150,
        fontSize:20
      },
      txt5:{
        top:125,
        fontSize:20
      },
      row: {
        
        zIndex:1,
        top: 55,
        left:15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    row1:{
        
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Column:{ 
        
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    column1:{
        
        flexDirection: 'column',
        width:175,
        flexWrap: 'wrap',
    },
    column2:{
        
        flexDirection: 'column',
        width:175,
        flexWrap: 'wrap',
    },
    column3:{
        
        flexDirection: 'column',
        top: 363,
        width:300,
        flexWrap: 'wrap',
    },
    rowcf:{
        
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    txtCf2:{
        top:10,
        left:30,
        fontSize:15,
        color:'#CFCFCF',
        fontStyle: 'italic',
    },
    star:{
        left:30,
        top:30,
    },
    txtstar1: {
        
        left:54,
        top:9,
        fontSize:20,
        color:'white',
    },
    txtstar2: {
        left:85,
        top:-19,
        fontSize:19,
        color:'white',
    },
    coffee:{
        top:-110,
        left:210,
        width:35,
        height:35
    },
    water:{
        
        top:-140,
        left:283,
        width:30,
        height:30
    },
    txtcoffee:{
        left:205,
        top:-130,
        color:'#CFCFCF',
        fontStyle:'italic',
    },
    txtwater:{
        
        left:270,
        top:-150,
        color:'#CFCFCF',
        fontStyle:'italic',

    },
    txt1:{
        
        left:210,
        top:-145,
        fontSize:16,
        color:'white',
    },
    box3:{ 
        top:135,
        left:270,
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding:1,
        color: '#000000',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#967259',
        },
    txtchoco:{
        color:'white',
        top:210,
        left:10,
        width:120,
        height: 35,
        lineHeight:30,
        backgroundColor:'#967259',
        textAlign:'center',
        borderRadius: 13,
    },
    txtchoco1:{
        color:'#967259',
        top:175,
        left:140,
        width: 120,
        height: 35,
        lineHeight:30,
        lineHeight:30,
        padding:1,
        borderRadius: 13,
        borderWidth: 1,
        textAlign:'center',
        borderColor: '#967259',
    },
    txtchoco2:{
        color:'#967259',
        top:140,
        left:270,
        width: 120,
        height: 35,
        lineHeight:30,
        lineHeight:30,
        padding:1,
        borderRadius: 13,
        borderWidth: 1,
        textAlign:'center',
        borderColor: '#967259',
    },
    photoProduct:{
        zIndex:0,
        top:30,
        left:5,
    },
    
});
export default ProductDetail;