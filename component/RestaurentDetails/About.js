import React from "react";
import {View,Text, Image} from "react-native";

const image="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=";
const title = "Firm House kitchen Thai Cusine";
const description="Thai Comfort * Food * $$ * 🎫 * 4 ⭐ (2345+)";

export default function About(){
    return(
        <View>
                <RestaurantImage image={image} />
                <RestaurantTitle title={title}/>
                <RestaurantDescription  description={description}/>
        </View>
    );
}
const RestaurantImage =(props) =>(
    <Image source={{uri:props.image}} 
    style={{width:"100%", height:180}}/>
);

const RestaurantTitle = (props) =>(
    <Text style={{
        fontWeight:"600",
        fontSize:29,
        marginTop:10,
        marginHorizontal:15,
    }}>{props.title}</Text>
);

const RestaurantDescription = ( props )=>(
    <Text style={{
    marginTop:10, 
    marginHorizontal:15, 
    fontSize:15,
    fontWeight:"400" }}>
    { props.description }</Text>
);