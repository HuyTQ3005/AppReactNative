import { StyleSheet,Image,Button,Alert,Text,View, TextInput } from "react-native";
import {TouchableHighlight,Pressable,TouchableOpacity,ScrollView} from "react-native";

const ItemProduct2 = ({imageSource,textContent1,textContent2,textContent3,goProduct,restaurant}) => {
//    console.log("Product-------1-------", imageSource);
    return (
        <View style={styles.specy2}>
            <TouchableOpacity
                style={styles.cf02}
                onPress={goProduct}>
                <Image
                source={{
                    uri:imageSource,
                }}
                style={styles.capuchino1}
                />
                <Text style={styles.txtspecial1}>{textContent1}</Text>
                <Text style={styles.txtspecial2}>{textContent2}</Text>
                <Text style={styles.txtspecial4}><Text style={{fontWeight:300}}>$ </Text>{textContent3}</Text>
            </TouchableOpacity>  
        </View>
    )
};
const styles = StyleSheet.create({
    specy2:{
        marginVertical:5,
        zIndex:0,
        backgroundColor:'white',
        width: "93%",
        height: 190,
        borderRadius: 25,
        borderWidth: 1,
        borderColor:'#967259'
    },
    cf02:{
        top: 50,
        left: 10,
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius:5,
        borderBottomStartRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        
        zIndex:1,
    },
    capuchino1:{
        top:10,
        width: 170,
        height: 170,
        borderRadius:25,
        zIndex:1,
    },
    txtspecial1:{
    
        zIndex:1,
        left: 200,
        width: "100%",
        top:-130,
        color:'#967259',
        fontSize: 22
    },
    txtspecial2:{
        zIndex:1,
        left: 200,
        width: 130,
        top:-120,
        fontSize: 18,
        color:'#967259',
        fontWeight:'400',
        fontStyle:'italic',
    },
    txtspecial4:{
        zIndex:1,
        left: 190,
        width: 145,
        top:-120,
        fontSize: 38,
        fontWeight:'500',
        color:'#967259'
      },
});
export default ItemProduct2