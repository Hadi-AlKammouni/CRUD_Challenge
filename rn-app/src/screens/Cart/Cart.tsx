import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from "react-native";

import { useCart } from "../../context/Cart";
import styles from "./styles";

const Cart = ({navigation}: {navigation: any}) => {

    const {cartItems, setCartItems, billTotal, setBillTotal} = useCart()

    const Card = ({product}: {product: any}) => {
        return (
            <>
                <View style={styles.card}>
                    <View style={styles.product_img_view}>
                        <Image style={styles.product_img} source={{uri: product.image}}/>
                    </View>
                    <Text style={styles.product_name}>{product.name} - {product.description}: ${product.price}</Text>
                    <View style={styles.product_details}>
                        {displayQuantity({product})}
                    </View>
                    <TouchableOpacity onPress={() => {
                        setBillTotal(billTotal - product.price * product.quantity)
                        product.quantity = 0
                        setCartItems(cartItems.filter((item: { id: any; }) => item.id !== product.id))
                        }}>
                        <View style={styles.remove_view}>
                            <Text style={styles.sign}>Remove from cart</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    const displayQuantity = ({product}: {product: any}) => {

        // const [counter, SetCounter] = useState(1)
        const [price, SetPrice] = useState(product.price)

        return (
            <>
            <Text style={styles.product_price}>${price * product.quantity}</Text>
            <View style={styles.quantity_view}>
                {product.quantity > 1 ? 
                    <TouchableOpacity onPress={() => {
                        // SetCounter(counter-1)
                        product.quantity -= 1
                        decrementBill({price})
                    }}>
                        <View style={styles.btn_view}>
                            <Text style={styles.add_remove_sign}>-</Text>
                        </View>
                    </TouchableOpacity>
                :
                    <View style={styles.btn_view}>
                        <Text style={styles.add_remove_sign_disable}>-</Text>
                    </View>   
                }
                <Text style={styles.quantity}>{product.quantity}</Text>
                <TouchableOpacity onPress={() => {
                    // SetCounter(counter+1)
                    product.quantity += 1
                    incrementBill({price})
                }}>
                    <View style={styles.btn_view}>
                        <Text style={styles.add_remove_sign}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </>
        )
    }

    const incrementBill = ({price}: {price: number}) => {
        setBillTotal(billTotal + price)
    }

    const decrementBill = ({price}: {price: number}) => {
        setBillTotal(billTotal - price)
    }

    const displayBill = () => {
        return (
            <TouchableOpacity>
                <View style={styles.bill_container}>
                    <Text style={styles.bill}>Your total bill = ${billTotal}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const calculateBill = () => {
        var bill = 0
        cartItems.map((product: { price: number; }) => {
            bill += product.price
        })
        setBillTotal(bill)
    }

    useEffect(()=> {
        calculateBill()   
        const editted_products = cartItems
        editted_products.map((product: {[x: string]: number; price: any; }) => {
            product.quantity = 1
        })
    },[])

    return (
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require("../../assets/icons8-arrow-left-50.png")} 
                        resizeMode='contain' 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require("../../assets/icons8-home-page-40.png")} resizeMode='contain' style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {cartItems.length === 0 ?
                <View style={styles.title_header}>
                        <Text style={styles.title}>Your didn't pick any product!</Text>
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
                {displayBill()}
                </>
            }
        </SafeAreaView>
        </>
    )
}

export default Cart;