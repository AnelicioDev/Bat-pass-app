import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import BatLogo from "../../Components/BatLogo/BatLogo";
import BatInput from "../../Components/BatInput/BatInput";
import { BatButton } from "../../Components/BatButton/BatButton";

import genererPass from "../../Service/PassawordService"
import * as Clipboard from "expo-clipboard"

export default function Home(){
    const [pass, setPass] = useState("")

    function generatePassword(){
        let genererToken = genererPass()
        setPass(genererToken)
    }

    function copyPassGenerate(){
        Clipboard.setStringAsync(pass)
    }

    return(
        <View style={styles.home}>
            <BatLogo/>
            <BatInput pass={pass}/>
            <BatButton onGeneratePress={generatePassword} copyPass={copyPassGenerate}/>
            <StatusBar style="auto"/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    home:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#222222"
    }
})