import React from "react";
import {View,Text} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../component/RestaurentDetails/About";
import MenuItems from "../component/RestaurentDetails/MenueItem";

export default function RestaurentDetails() {
    return(
        <View>
            <About/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems/>
        </View>
    );
}