import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from "react-native";

import { useCart } from "../../context/Cart";
import styles from "./styles";

const Cart = ({navigation}: {navigation: any}) => {

    const {cartItems, setCartItems} = useCart()

    const Card = ({product}: {product: any}) => {
        return (
            <>
                <View style={styles.card}>
                    <View style={styles.product_img_view}>
                        <Image style={styles.product_img} source={{uri: product.image}}/>
                    </View>
                    <Text style={styles.product_name}>{product.name}</Text>
                    <View style={styles.product_details}>
                        <Text style={styles.product_price}>${product.price}</Text>
                        <View style={styles.quantity_view}>
                            <View style={styles.btn_view}>
                                <Text style={styles.add_remove_sign}>-</Text>
                            </View>
                            <Text style={styles.quantity}>1</Text>
                            <View style={styles.btn_view}>
                                <Text style={styles.add_remove_sign}>+</Text>
                            </View>
                        </View>
                    </View>
                        
                    <TouchableOpacity onPress={() => setCartItems(cartItems.filter((item: { id: any; }) => item.id !== product.id))}>
                        <View style={styles.remove_view}>
                            <Text style={styles.sign}>Remove from cart</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </>
        )
    }

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
            {cartItems.length === 0 ?
                <View style={styles.title_header}>
                        <Text style={styles.title}>Your didn't pick any product yet!</Text>
                </View>
            :
                <>
                <View style={styles.title_header}>
                        <Text style={styles.title}>Your picked products!</Text>
                </View>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 15,
                        paddingBottom: 50
                    }}
                    data={cartItems} 
                    renderItem={({item}) => <Card product={item}/>}
                    />
                </>
            }
        </SafeAreaView>
    )
}

export default Cart;