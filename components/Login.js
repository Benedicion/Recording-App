import * as React from 'react'
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'



function SignIn (){

  const addUser = (() => {
      
  })

  return(
    <View>
      <Text style={styles.text}> Login </Text>

      <TextInput placeholder="Enter Username" title='text' style={styles.input}/>
      <TextInput placeholder="Enter Password" title='text' style={styles.input}/>

      <TouchableOpacity onPress={addUser} style={styles.btn}>
        <Text style={styles.btnText}> Start </Text>
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

export default SignIn;