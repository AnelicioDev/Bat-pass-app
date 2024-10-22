import React from 'react';
import {Pressable, StyleSheet, Text, View } from 'react-native';

interface BatButtonProps{
    onGeneratePress: ()=> void
    copyPass: ()=> void
}

export function BatButton({onGeneratePress, copyPass}:BatButtonProps) {
  return (
    <View style={styles.containerBatutton}>
        <Pressable style={styles.ButtonStyle} onPressIn={onGeneratePress}>      
            <Text>Generete</Text>
        </Pressable>
        <Pressable style={styles.ButtonStyle} onPress={copyPass}>      
            <Text>Copy</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    ButtonStyle:{
        backgroundColor: "#00BFFF",
        width:170,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        marginTop:20,
    },
        containerBatutton:{
        marginTop:30,  
    }
})