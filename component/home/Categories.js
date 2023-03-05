import react from "react";
import {View,Text, Image, ScrollView} from "react-native";

const item = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "pickup",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];



export default function Categories(){
    return(
        <View style={{marginTop:5,
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingLeft:20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.map(( item, index ) =>(
            <View key={index} style={{marginRight:30, alignItems:"center"}}>
                <Image source={item.image} style={{
                height:50,
                width:40,
                resizeMode:"contain",}}/>
                <Text style={{
                    fontSize:13,
                    fontWeight:"900",
                }}>{item.text}</Text>
                
            </View>

            )) }
            </ScrollView>
            </View>
    )
}