import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f96ec'
  },
  header: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 3,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  logo: {
    width: 150,
    height: 120
  }
});

export default styles;