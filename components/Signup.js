import * as React from 'react'
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'


function SignUp ({navigation}){

  

  return(
    <View style={styles.container}>
      <Text style={styles.text}> Sign Up </Text>

      <TextInput placeholder="First Name" style={styles.input}/>
      <TextInput placeholder="Last Name" style={styles.input}/>
      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Password" style={styles.input}/>

      <TouchableOpacity 
      onPress={() => navigation.navigate('camera')} 
      style={styles.btn}>
        <Text style={styles.btnText}> Next </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: 315,
    height: 60,
    backgroundColor: "white",
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 12,
  },

  text: {
    fontSize:20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },

  btn: {
    width: 150,
    height: 40,
    backgroundColor: "white",
    marginLeft: 80,
  },

  btnText: {
    paddingLeft: 42,
    paddingTop: 8,
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 5,
  }

});


export default SignUp;