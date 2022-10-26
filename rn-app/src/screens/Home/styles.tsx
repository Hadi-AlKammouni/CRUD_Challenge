import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width/2-30

const styles = StyleSheet.create({
  major_header: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  minor_header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: "#5f96ec"
  },
  icon: {
    width: 40,
    height: 40,
  },
  search: {
    marginTop: 30,
    flexDirection: 'row'
  },
  search_container: {
    height: 50,
    backgroundColor: "#eaebec",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eaebec',
    flex: 1
  },
  sort_btn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5f96ec',
    borderRadius: 15
  },
  card: {
    height: 225,
    backgroundColor: '#eaebec',
    width: width,
    marginHorizontal: 2,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  product_img_view: {
    height: 110,
    alignItems: 'center'
  },
  product_img: {
    flex: 1, 
    height:100,
    width:120,
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
    marginTop: 5
  },
  product_price: {
    fontSize: 19, 
    fontWeight: 'bold'
  },
  add_view: {
    height: 40, 
    width: 40, 
    backgroundColor: '#5f96ec', 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  plus: {
    fontSize: 22, 
    color: '#fff', 
    fontWeight: 'bold'
  }
});

export default styles;