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
  },
  disable_button: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: "#AAA8A8",
    height: 50,
    borderRadius:15
  },
  text_sign: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: "#5f96ec",
    height: 50,
    borderRadius:15
  },
  extra_btn: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: "#1E21AD",
    height: 50,
    borderRadius:15
  }
});

export default styles;