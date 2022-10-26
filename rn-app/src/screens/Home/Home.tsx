import React from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";

import styles from "./styles";

const Home = () => {
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