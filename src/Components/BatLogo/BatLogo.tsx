import React from "react";
import {Image, Text, StyleSheet} from "react-native";
import logo from "../../../assets/batman-176.png"

export default function BatLogo(){
    return(
        <>
            <Text style={styles.texto}>BAT PASS GENERATOR</Text>
            <Image
                style={styles.logo} 
                source={logo}
            />
        </>
    )
}

const styles = StyleSheet.create({
    texto:{
        color: "#00BFFF",
        fontSize: 24,
        fontWeight: "bold"
    },
    logo:{
        width: 200,
        height: 200,
    }
})