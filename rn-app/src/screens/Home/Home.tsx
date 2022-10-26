import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";

const Home = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await fetch(`http://192.168.0.103:3000/products`,{
                headers: {
                  'x-access-token': token,
                  'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            setProducts(data)
        } catch (error) {
            showMessage({
                message: "Something went wrong.",
                type: "danger",
            });
        }
    
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <SafeAreaView style={styles.major_header}>
            <View style={styles.minor_header}>
                <View>
                    <Text style={styles.welcome}>Welcome to</Text>
                    <Text style={styles.title}>Fleet</Text>
                </View>
                <Image source={require("../../assets/icons8-shopping-cart-48.png")} resizeMode='contain' style={styles.icon}/>
            </View>
            <View style={styles.search}>
                <View style={styles.search_container}>
                    <Image source={require("../../assets/icons8-search-48.png")} resizeMode='contain' style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="Search" />
                </View>
                <View style={styles.sort_btn}>
                    <Image source={require("../../assets/icons8-ascending-sorting-48.png")} resizeMode='contain' style={styles.icon}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;