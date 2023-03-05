import react from "react";
import {View, Text, TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ButtomTab(){
    return(
        <View style={{
            flexDirection:"row",
            margin:10,
            marginHorizontal:30,
            justifyContent:"space-between", 
        }}>  
        
       <Icon text="Home" icon="home"/>
       <Icon text="Browse" icon="search"/>
       <Icon text="Grocery" icon="shopping-bag"/>
       <Icon text="Orders" icon="receipt"/>
       <Icon text="Account" icon="user"/>
        
        </View>
    );
}

const Icon = (props)=>(
    <TouchableOpacity>
    <View>
        <FontAwesome5
        size={25}
        name={props.icon}
            style={{marginBottom:3,
            alignSelf:"center"
            }}
        />
        <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
);