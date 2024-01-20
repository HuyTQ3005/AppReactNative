import { StyleSheet,Image,Button,Alert,Text,View, TextInput } from "react-native";
import {TouchableHighlight,Pressable,TouchableOpacity,ScrollView} from "react-native";
import * as React from 'react';


const ItemCart = ({imageSource,textContent1,textContent2,textContent3, goProduct}) => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 0) 
            setQuantity(quantity - 1);
    };
    return (
        
        <View style={styles.specy1}>
            <TouchableOpacity
                style={styles.cf01}
                onPress={goProduct}
               >
                <Image
                source={{
                    uri:imageSource,
                }}
                style={styles.capuchino1}
                />
                <Text style={styles.txtspecial1}>{textContent1}</Text>
                <Text style={styles.txtspecial2}>{textContent2}</Text>
                <Text style={styles.txtspecial3}><Text style={{fontWeight:300}}>$ </Text>{textContent3}</Text>
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
            </TouchableOpacity> 
        </View>
    )
};

const styles = StyleSheet.create({
specy1:{
    zIndex:1,
    backgroundColor:'#967259',
    width: 340,
    height: 190,
    borderRadius: 25,
    marginVertical:8,
  },
  cf01:{
    top: 10,
    left: 10,
    width: 170,
    height: 170,
    zIndex:1,
    },
    capuchino1:{
        width: 170,
        height: 170,
        borderRadius:25,
        zIndex:1,
    },
    txtspecial1:{

        zIndex:1,
        left: 180,
        width: 145,
        top:-150,
        color:'#ffffff',
        fontSize: 23
    },
    txtspecial2:{
        zIndex:1,
        left: 180,
        width: 145,
        top:-150,
        fontSize: 15,
        color:'#ffffff',
        fontWeight:'200',
        fontStyle:'italic',
      },
      txtspecial3:{
        zIndex:1,
        left: 190,
        width: 145,
        top:-150,
        fontSize: 38,
        fontWeight:'500',
        color:'#FFFFFF'
      },
});
export default ItemCart