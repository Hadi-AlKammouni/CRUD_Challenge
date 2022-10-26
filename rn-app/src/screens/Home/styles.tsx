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
    backgroundColor: "#ccc",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1
  }
});

export default styles;