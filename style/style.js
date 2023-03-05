import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  label: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  input: {
    fontSize: 40,
    paddingLeft: 10,
    backgroundColor: '#5454541c',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'orange',
    flexDirection: 'row',
    fontSize: 40,
    fontStyle: 'bold',
    width: 265,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rules: {
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'orange',
    flexDirection: 'row'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "orange",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20,
  },
  playerName: {
    paddingLeft: 10,
    fontSize: 25,
  },
});