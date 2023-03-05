import react from "react";
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar(){
    return(
        <View style={{flexDirection:"row", marginTop:15}}>
           <GooglePlacesAutocomplete placeholder="Search" styles={{}}/>
        </View>
    )
}