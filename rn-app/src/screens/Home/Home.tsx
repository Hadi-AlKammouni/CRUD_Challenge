import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import styles from "./styles";

const Home = () => {
    return (
        <SafeAreaView style={styles.major_header}>
            <View style={styles.minor_header}>
                <View>
                    <Text style={styles.welcome}>Welcome to</Text>
                    <Text style={styles.title}>Fleet</Text>
                </View>
                <Image source={require("../../assets/icons8-shopping-cart-48.png")} resizeMode='contain' style={styles.cart}/>
            </View>
        </SafeAreaView>
    )
}

export default Home;