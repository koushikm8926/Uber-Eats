import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

export default function Header(){
    const [activeTab, setActiveTab]= useState("DELIVERY")

    return(
        <View style={{flexDirection:"row", alignSelf:"center"}}>
         <HeaderButton Text="DELIVERY"
          btncolor="black"
           textcolor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
           />
         <HeaderButton Text="PICKUP"
          btncolor="white"  
          textcolor="black"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          />
        </View>
    );
}

const HeaderButton =(props)=>(

    <TouchableOpacity style={{
          backgroundColor:props.activeTab===props.Text ? "black":"white", 
          paddingHorizontal:16,
          paddingVertical:6,
          borderRadius:32,
          marginTop:25
        }}
        onPress={()=> props.setActiveTab(props.Text)
        }
    >
    <Text style={{
      color:props.activeTab ===props.Text ? "white":"black", 
      fontSize:15,
      fontWeight: 'bold',
    }}>{props.Text}</Text>
    </TouchableOpacity>

    );