import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold") {
        estilo = estilos.TextoBold;
    }

    return <Text style={[style, estilos]} >{ children }</Text>;
}

const estilos = StyleSheet.create({

    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },

    textoBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    } 

});
