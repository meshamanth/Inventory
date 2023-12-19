import React from 'react';
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";


const SettingsScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Settings Screen</Text>
        </View>
    );
}



export default SettingsScreen;
