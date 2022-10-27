import React from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const Cart = ({navigation}: {navigation: any}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require("../../assets/icons8-arrow-left-50.png")} 
                        resizeMode='contain' 
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Cart;