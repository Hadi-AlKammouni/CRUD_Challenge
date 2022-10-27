import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
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
    img_container: {
        flex: 0.55,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        resizeMode: 'contain',
        flex: 1,
        height:250,
        width: 250,
        borderRadius: 15
    },
    details_container: {
        flex: 0.45,
        backgroundColor: "#eaebec",
        marginHorizontal: 7,
        marginBottom: 7,
        marginTop: 30,
        paddingTop: 30,
        borderRadius: 20
    },
    details: {
        marginLeft: 20, 
        marginTop: 20, 
        marginBottom: 30,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    name: {
        fontSize: 35, 
        fontWeight: 'bold'
    },
    info: {
        backgroundColor: "#5f96ec", 
        width: 80, 
        height: 40, 
        borderTopLeftRadius: 25, 
        borderBottomLeftRadius: 25, 
        justifyContent: 'center'
    },
    price: {
        marginLeft: 15, 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16
    },
    desc_container: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    desc: {
        fontWeight: 'bold',
        color: "eaebec",
        fontSize: 25,
        marginTop: 5
    },
    add_view: {
        height: 50, 
        backgroundColor: "#5f96ec", 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 30,
        marginTop: 30
    },
    remove_view: {
        height: 50, 
        backgroundColor: "#FF0000", 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 30,
        marginTop: 30
    },
    add_text: {
        color: '#fff', 
        fontSize: 18, 
        fontWeight:'bold'
    },
    btn: {
        marginTop: 50
    }
});

export default styles;