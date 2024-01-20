import { StyleSheet,Image,Button,Alert,Text,View, TextInput } from "react-native";
import {TouchableHighlight,Pressable,TouchableOpacity,ScrollView} from "react-native";
import * as React from 'react';
import { GET_ALL,GET_IMD } from "../api/apiService";
import { useState, useEffect } from "react";
import axios from "axios";


const Payment = ({navigation, route}) => {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const prices=route.params.item.price;
    var ngay=date;
    var pay="Thanh toán khi nhận.";
    var addresss="Tphcm";
    const [isLoading, setIsLoading] = useState(false);
const imgUrl = (GET_IMD("products", route.params.item.photo));
const [address,setAddress]=useState('');
const [dateorder,setDateorder]=useState('');
const [paymethod,setPaymethod]=useState('');
const [price,setPrice]=useState('');
const [status,setStatus]=useState(1);
const [user_id,setUser_id]=useState('');
    const [quantity, setQuantity] = useState(1);
    console.log(dateorder);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
         if (quantity > 0) 
            setQuantity(quantity - 1);
    };
    // console.log("ket qua======", route.params.item.photo);
    const onPress = () => {
      
    }
    const handleSubmit=() => {
        let fdata={
          address:addresss,
          dateorder:ngay,
          paymethod:pay,
          price:prices,
          status:1,
          user_id:1,
        }
        axios.post("http://172.16.9.15:8080/api/orders",fdata).then((response)=>
        {
          if(response.data){
            Alert.alert("Bạn đã đặt hàng thành công")
            navigation.navigate("home")
          }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.row}>
            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../logo/Back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.txtPay}>Check Before Payment</Text>
            </View>
            <View style={styles.rowPD}>
            {/* <Image
                style={styles.imgCapu}
                source={require('../product/Capuchino01.png')}
            />   */}
             {isLoading ? (
                <Text>Loading....</Text>
                ) : (
                    // 
                // <Text>Loading....02</Text>
                <Image
                    style={styles.imgCapu}
                        source={{
                        uri: imgUrl,
                    }}
                    />
                )
                }
                <View style={styles.column}>
                    <Text style={styles.txtPD1}>{route.params.item.title}</Text>
                    <View style={styles.vPD}>
                        <Text style={styles.txtPD3}>{route.params.item.description}</Text>
                    </View>
                    <Image
                    style={styles.star}
                        source={require('../logo/star.png')}
                    />
                    <Text style={styles.txtPD4}>4.8 </Text>
                    <Text style={{fontSize:16,top:-30,left:100,color:'#444444',fontStyle:'italic'}}>(6.986)</Text>
                </View>
            </View>
            <View style={styles.phivc}>
                <Text style={styles.txt1}>--- Phí vận chuyển:</Text>
                <Text style={styles.txt2}>- - Miễn phí vận chuyển</Text>
                <Image
                    style={styles.freeship}
                    source={require('../logo/freeship.png')}
                />
            </View>
            <View style={styles.HCTT}>
                <Text style={styles.txt3}>Chọn hình thức thanh toán:</Text>
                <TouchableOpacity
                    style={styles.pay1}
                    onPress={onPress}
                    
                >
                    <Text style={{color:'white',fontSize:14}}>Thanh toán khi nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.pay2}
                    onPress={onPress}
                >
                    <Text style={styles.TT}>Thanh toán qua:</Text>
                    <Image 
                        style={styles.logo1}
                        source={require('../logo/Visa.png')}
                    />
                    <Image 
                        style={styles.logo1}
                        source={require('../logo/Napas.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.row1}>
                <Text style={styles.txtSL}>Chọn số lượng:</Text>
                <TouchableOpacity
                    style={styles.tru}
                    onPress={decreaseQuantity}
                >
                <Image
                    source={require("../logo/Tru.png")}
                />
                </TouchableOpacity>  
                <Text style={styles.txtS1}>{quantity}</Text>
                    <TouchableOpacity
                        style={styles.cong}
                        onPress={increaseQuantity}
                    >
                    <Image
                        source={require("../logo/Cong.png")}
                    />
                    </TouchableOpacity> 
            </View>
            <View style={styles.bill}>
                <Text style={styles.txt4}>Chi tiết hóa đơn:</Text>
                <Text style={styles.txt5}>Tên sản phẩm:</Text>
                <Text style={styles.txt6}>{route.params.item.title}</Text>
                <Text style={styles.txt5}>Ngày đặt hàng:</Text>
                <Text style={styles.txt6} >{date}</Text>
                <Text style={styles.txt5}>Tên khách hàng:</Text>
                <Text style={styles.txt6} >1</Text>
                <Text style={styles.txt5}>Đại chỉ giao hàng:</Text>
                <Text style={styles.txt6} >TpHCM</Text>
                <Text style={styles.txt5}>Phí vận chuyển:</Text>
                <Text style={styles.txt6}>Miễn phí vận chuyển.</Text>
                <Text style={styles.txt5}>Hình thức thanh toán:</Text>
                <Text style={styles.txt6} >{pay}</Text>
                <Text style={styles.txt5}>Số Lượng:</Text>
                <Text style={styles.txt6}>{quantity}</Text>
            </View>
                <Text style={styles.txt7}>Tổng tiền:</Text>
                {/* <Text style={{color:'#967259',fontWeight:400}}>$</Text> */}
                <Text style={styles.txt8} onChangeText={(text)=>setPrice(text)}> {prices*quantity}</Text>
                <TouchableOpacity
                    style={styles.add}
                        onPress={onPress}
                >
                <Text style={{color:'#967259',fontSize:21}}>+</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={styles.buy}
                        onPress={()=>handleSubmit()}
                >
                <Text style={{color:'white',fontSize:21}}>BUY</Text>
                </TouchableOpacity> 
        </ScrollView>
    );
};

const styles =StyleSheet.create({
    container:{
        backgroundColor: 'rgba(232,232,232)',
        zIndex:0,
        flex: 1,
    },
    column:{
        flexDirection:'column',
    },
    txtPD1:{
        left: 25,
        top: 15,
        width:180,
        fontSize:26,
        fontWeight:'600'
    },
    txtPD2:{
        left: 25,
        top: 15,
        fontSize:18,
        fontStyle:'italic',
    },
    vPD:{
        left: 30,
        zIndex:1,
        top:25,
        width:170,
        height:60,

    },
    txtPD3:{
        fontStyle:'italic',
        color:'#444444',
        fontSize:14,
        fontWeight:'300'
    },
    star:{
        top:20,
        width:20,
        height:20,
        left:30,
    },
    txtPD4:{
        top:-5,
        left:60,
        color:'#967259',
        fontSize:25,
    },
    phivc:{
        backgroundColor:'#FFFFFF',
        top:20,
        height:53,
    },
    txtPay:{
        top:-1,
        left:50,
        color: '#967259',
        fontSize:18,
    },
    rowPD:{
        flexDirection:'row',
        borderWidth: 1,
        width:370,
        top:10,
        height:190,
        borderColor: '#967259',
        backgroundColor:'white'
    },
    row:{
        flexDirection:'row',
        borderWidth: 1,
        width:320,
        height:50,
        left:20,
        alignItems: 'center',
        borderColor: '#967259',
        borderRadius:30,
        backgroundColor:'white'
    },
    row1:{
        backgroundColor:'white',
        top:60,
        height:40,
        flexDirection:'row',
    },
    back:{
        left:20,
        width:30,
        height:30,
        zIndex: 1,
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
    },
    product:{
        zIndex: 0,
        top:30,
        backgroundColor:'#967259',
        width:350,
        height:150,
        left:10,
        borderRadius:20,
    },
    imgCapu:{
        width:170,
        height:170,
        borderRadius:20,
        top:10,
        left:10
    },
    txt1:{
        top:5,
        fontSize:17,
        left:40,
        color: '#967259',
        fontStyle:'italic',
        fontWeight:'500'
    },
    txt2:{
        top:5,
        fontSize:15,
        left:70,
        color: '#444444',
        fontStyle:'italic',
    },
    freeship:{
        top:-35,
        width:60,
        height:35,
        left:250,
    },
    HCTT:{
        top:40,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#967259',
    },
    txt3:{
        top:10,
        left:10,
        color: '#967259',
        fontSize:17,
        fontWeight:'500'
    },
    pay1:{
        top:15,
        width:150,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#967259',
        borderRadius: 20,
        left:15,

    },
    pay2:{
        top:-25,
        width:150,
        height:40,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor:'#967259',
        borderRadius: 20,
        left:180,
    },
    TT:{
        top:10,
        left:10,
        color:'#444444'
    },
    logo1:{
        top:-8,
        left:110,
        width:30,
        height:10,
    },
    txtSL:{
        top:10,
        left:30,
        color:'#967259',
        fontSize:17,
        fontWeight:'500',
        fontStyle:'italic',
    },
    tru:{
        top:12,
        left:60,
        width: 20, 
        height: 20,
        backgroundColor: '#967259',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    txtS1:{
        fontSize:16,
        left:80,
        top:12,
    },
    cong:{
        top:12,
        left:100,
        width: 20, 
        height: 20,
        backgroundColor: '#967259',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    bill:{
        top:80,
        height:310,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#967259',
    },
    txt4:{
        left:15,
        fontSize:18,
        top:7,
        fontWeight:'500',
    },
    txt5:{
        top:5,
        left:20,
        color: '#967259',
        fontStyle:'italic',
    },
    txt6:{
        top:5,
        left:30,
        color: '#444444',
        fontStyle:'italic',
    },
    txt7:{
        left:15,
        fontSize:18,
        top:90,
        fontWeight:'400',
        color: '#444444',
        fontStyle:'italic',
    },
    txt8:{
        left:15,
        fontSize:28,
        top:90,
        height:80,
        fontWeight:'700',
        color: '#444444',
        fontStyle:'italic',
    },
    add:{
        top:5,
        left:140,
        width: 50, 
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#967259'
    },
    buy:{
        top:-35,
        left:200,
        width: 150, 
        height: 40,
        backgroundColor: '#967259',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
    }
});
export default Payment;