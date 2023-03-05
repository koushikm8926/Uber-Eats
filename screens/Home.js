import React, { useState } from "react";
import { View, Text, SafeAreaView ,ScrollView } from 'react-native';
import { Divider } from "react-native-elements/dist/divider/Divider";
import ButtomTab from "../component/home/BottomTabs";
import Categories from "../component/home/Categories";
import Header from "../component/home/HeaderTabs";
import RestaurentItem, { localRestaurants } from "../component/home/RestaurentItem";
import SearchBar from "../component/home/SearchBar";

export default function Home(){

  const [restaurantData, setrestaurantDate]=React.useState(localRestaurants)

    return(
        <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
          <View style={{backgroundColor:"white", padding:15}}>
              <Header />
              <SearchBar/>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              <Categories/>
              <RestaurentItem restaurantData={restaurantData}/>
          </ScrollView>  
            <Divider width={1}/>
              <ButtomTab/> 
        </SafeAreaView>
    );
}