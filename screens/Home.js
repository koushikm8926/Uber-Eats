import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import Header from "../component/HeaderTabs";
import SearchBar from "../component/SearchBar";

export default function Home(){
    return(
        <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
          <View style={{backgroundColor:"white", padding:15}}>
          <Header />
            <SearchBar/>
          </View>
        </SafeAreaView>
    );
}