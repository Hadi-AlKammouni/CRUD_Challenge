import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon : {
        width: 40,
        height: 40,
    },
    title_header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: "#fff",
        marginTop: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    card: {
        height: 340,
        backgroundColor: '#eaebec',
        marginHorizontal: 2,
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
    },
    product_img_view: {
      height: 150,
      alignItems: 'center'
    },
    product_img: {
      flex: 1, 
      height: 150,
      width: 200,
      resizeMode: 'contain',
      borderRadius: 15
    },
    product_name: {
      fontWeight: 'bold', 
      fontSize: 17, 
      marginTop:20
    },
    product_details: {
      flexDirection: 'row', 
      justifyContent:"space-between", 
      alignItems: 'center',
      marginTop: 5
    },
    product_price: {
      fontSize: 19, 
      fontWeight: 'bold'
    },
    remove_view: {
      height: 40, 
      marginTop: 20,
      backgroundColor: '#FF0000', 
      borderRadius: 15, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    sign: {
      fontSize: 22, 
      color: '#fff', 
      fontWeight: 'bold'
    },
    add_remove_sign: {
        fontSize: 22, 
        fontWeight: 'bold'
    },
    add_remove_sign_disable: {
        fontSize: 22, 
        fontWeight: 'bold',
        color: "#ccc"
    },
    quantity_view: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_view: {
        borderColor: '#5f96ec', 
        borderWidth: 1, 
        borderRadius: 5, 
        height: 45, 
        width: 60, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    quantity: {
        fontSize: 20, 
        marginHorizontal: 10, 
        fontWeight: 'bold'
    },
    bill_container: {
        bottom: 10,
        borderRadius: 15,
        backgroundColor: '#5f96ec',
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    bill: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default styles;