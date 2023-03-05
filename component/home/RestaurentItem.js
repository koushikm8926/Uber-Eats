import react from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

 export const localRestaurants =[
    {
        name:"Beachside Bar",
        image_url:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        catagories:["cafe", "bar"],
        price:"$$",
        review:1220,
        rating:4.5,
    },
    {
        name:"Beanihanes",
        image_url:"https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600",
        catagories:["cafe", "bar"],
        price:"$$",
        review:1220,
        rating:3.5,
    },
    {
        name:"The Royal Cafe",
        image_url:"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
        catagories:["cafe", "bar"],
        price:"$$",
        review:1220,
        rating:4,
    },
    {
        name:"The Royal Cafe",
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KRcrDNIqriNtE1-SjIxe4f9Q_0cTJz-mOA&usqp=CAU",
        catagories:["cafe", "bar"],
        price:"$$",
        review:1220,
        rating:4,
    },
    {
        name:"The Royal Cafe",
        image_url:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
        catagories:["cafe", "bar"],
        price:"$$",
        review:1220,
        rating:4,
    },
    
];


export default function RestaurantItem(props){
    return(

       
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
        {props.restaurantData.map((Restaurant, index) =>( 
        <View
        key={index}
         style={{backgroundColor:"white", marginTop:10, padding:15}}>
          <RestaurantImage image={Restaurant.image_url}/>
          <RestaurantInfo name={Restaurant.name} rating={Restaurant.rating}/>
        </View>
        ) )}

        </TouchableOpacity>
      

    )
}

const RestaurantImage= (props)=> (
    <>
    <Image style={{width:"100%", height:180,}}
    source={{uri:props.image}}/>
    <TouchableOpacity  style={{position:"absolute", right:20, top:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props)=>(
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10}}>
       <View>
        <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name} </Text>
        <Text style={{fontSize:13, color:"gray"}}>30-40 * min</Text>
       </View>
       <View style={{
        backgroundColor:"#eee", 
       height:30, 
       width:30,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"}}>
        <Text>{props.rating}</Text>
        </View>
    </View>
);