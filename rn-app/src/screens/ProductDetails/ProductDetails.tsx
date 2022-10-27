import React from "react"
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native"

import { useCart } from "../../context/Cart"
import styles from "./styles"
const ProductDetails = ({navigation, route}: {navigation: any, route:any}) => {
    
    const product = route.params
    const {cartItems, setCartItems} = useCart()
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require("../../assets/icons8-arrow-left-50.png")} 
                        resizeMode='contain' 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require("../../assets/icons8-shopping-cart-48.png")} resizeMode='contain' style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.img_container}>
                <Image style={styles.img} source={{uri: product.image}}/>
            </View>
            <View style={styles.details_container}>
                <View style={styles.details}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.price}>${product.price}</Text>
                    </View>
                </View>
                <View style={styles.desc_container}>
                    <Text>Description:</Text>
                    <Text style={styles.desc}>{product.description}</Text>
                    {/* <View style={styles.quantity_container}>
                        <View style={styles.quantity_view}>
                            <View style={styles.btn_view}>
                                <Text style={styles.sign}>-</Text>
                            </View>
                            <Text style={styles.quantity}>1</Text>
                            <View style={styles.btn_view}>
                                <Text style={styles.sign}>+</Text>
                            </View>
                        </View>
                    </View> */}
                    <View style={styles.btn}>
                        {cartItems.includes(product) ?
                            <TouchableOpacity onPress={() => setCartItems(cartItems.filter((item: { id: any; }) => item.id !== product.id))}>
                                <View style={styles.remove_view}>
                                    <Text style={styles.add_text}>Remove From Cart</Text>
                                </View>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity onPress={() => setCartItems([...cartItems,product])}>
                                <View style={styles.add_view}>
                                    <Text style={styles.add_text}>Add to Cart</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails;