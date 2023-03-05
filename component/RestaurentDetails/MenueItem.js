import React from 'react'
import { ScrollView } from 'react-native';
import {Text,View,StyleSheet, Image,    } from "react-native";
import { Divider } from 'react-native-elements/dist/divider/Divider';


const foods =[
    {
        title:"Lasagna",
        description:"With Butter Lettuch with tomato and sauce",
        price:"14.50$",
        image:"https://www.southernliving.com/thmb/iI2Pd7BIh0MFuQ79WIEtgli9Ji4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg"
    },
    {
        title:"Tandori Chicken",
        description:"Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven. The dish is now popular world-wide",
        price:"19.50$",
        image:"https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg"
    },
    {
        title:"Chliaquiles",
        description:"Chilaquiles are a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.",
        price:"20.50$",
        image:"https://www.saveur.com/uploads/2020/01/14/5K4HTZC7WBFUNCYR77AMTAKST4.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440"
    },
    {
        title:"chicken caesar salad",
        description:"Chilaquiles are a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.",
        price:"20.50$",
        image:"https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg"
    },
    {
        title:"Chliaquiles",
        description:"Chilaquiles are a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.",
        price:"20.50$",
        image:"https://www.saveur.com/uploads/2020/01/14/5K4HTZC7WBFUNCYR77AMTAKST4.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440"
    },
    
    {
        title:"chicken caesar salad",
        description:"Chilaquiles are a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.",
        price:"20.50$",
        image:"https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg"
    },

    {
        title:"Lasagna",
        description:"With Butter Lettuch with tomato and sauce",
        price:"14.50$",
        image:"https://www.southernliving.com/thmb/iI2Pd7BIh0MFuQ79WIEtgli9Ji4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg"
    },
    
   
 
]

const FoodInfo = ( props)=>(
    <View>
        <View style={{width:240, justifyContent:"space-evenly"}}>
                <Text style={styles.titleStyle}>{props.food.title}</Text>
                <Text>{props.food.description}</Text>
                <Text>{props.food.price}</Text>
        </View>
    </View>
);

const FoodImage = ( props )=> (
    <View>
        <Image source={{ uri:props.food.image}} style={{width:100, height:100, borderRadius:8,  }} />
        
    </View>
);
export default function MenuItems(){
    return(
       
       <ScrollView showsVerticalScrollIndicator={false}  >
       
        {foods.map((food, index) =>(
        <View key={index}>
        <View style={styles.menuItems}>
            <FoodInfo food={food}/>
            <FoodImage food={food}/>
        </View>
        <Divider orientation='verticle'  width={0.5} style={{marginHorizontal:20}}/>
       </View>
       ))}
    
       </ScrollView>
      
    );
}


const styles= StyleSheet.create({
    menuItems: {
     flexDirection:'row',
     justifyContent:"space-between",
     margin:20,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600",
    },
 });