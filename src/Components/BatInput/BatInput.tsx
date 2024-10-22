import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface BatPassInput{
  pass:string
}

export default function BatInput(props:BatPassInput) {
  return (
    
    <TextInput 
      placeholder='Password' 
      style={styles.input}
      value={props.pass}
    ></TextInput>
    
  );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:"#EDEDED",
        width: 268,
        fontSize: 20,
        padding: 7,
        borderColor: '#00BFFF',
        borderWidth: 2,
        borderRadius: 10,
        textAlign:"center",
        fontWeight:"bold"
    }
})