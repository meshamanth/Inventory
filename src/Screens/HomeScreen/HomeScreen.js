import React from 'react';
import {Button, Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons name="home" size={30} color="#4F8EF7" />
        </SafeAreaView>
    );
}



export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})