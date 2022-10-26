import { StyleSheet } from 'react-native';

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
  cart: {
    width: 40,
    height: 40,
    marginTop: 9
  }
});

export default styles;