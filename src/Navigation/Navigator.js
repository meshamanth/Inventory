import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen/SettingsScreen";

const Navigator = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SettingScreen" component={SettingsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;