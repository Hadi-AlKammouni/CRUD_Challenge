import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Image, TextInput, FlatList, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";
import { useCart } from "../../context/Cart";

const Home = ({navigation}: {navigation: any}) => {

    const [products, setProducts] = useState([])
    const {cartItems, setCartItems} = useCart()

    const getProducts = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await fetch(`http://192.168.0.106:3000/products`,{
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

    const Card = ({product}: {product: any}) => {
        return (
            <>
            <TouchableOpacity onPress={() => navigation.navigate("ProductDetails",product)}>
                <View style={styles.card}>
                    <View style={styles.product_img_view}>
                        <Image style={styles.product_img} source={{uri: product.image}}/>
                    </View>
                    <Text style={styles.product_name}>{product.name}</Text>
                    <View style={styles.product_details}>
                        <Text style={styles.product_price}>${product.price}</Text>
                        {cartItems.includes(product) ?
                            <TouchableOpacity onPress={() => setCartItems(cartItems.filter((item: { id: any; }) => item.id !== product.id))}>
                            <View style={styles.remove_view}>
                                <Text style={styles.sign}>x</Text>
                            </View>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity onPress={() => setCartItems([...cartItems,product])}>
                                <View style={styles.add_view}>
                                    <Text style={styles.sign}>+</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </TouchableOpacity>
            </>
        )
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
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require("../../assets/icons8-shopping-cart-48.png")} resizeMode='contain' style={styles.icon}/>
                </TouchableOpacity>
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
            <FlatList 
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 15,
                    paddingBottom: 50
                }}
                numColumns={2} 
                data={products} 
                renderItem={({item}) => <Card product={item}/>}
            />
        </SafeAreaView>
    )
}

export default Home;