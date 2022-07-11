import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
  return <>
        <Image source={topo} style={estilos.topo} /> 
        <Texto style={estilos.titulo} > {titulo} </Texto> 
  </>;
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width,
    },
    titulo: {
        width: "100%",
        color: "white",
        position: "absolute",
        textAlign: "center",
        fontSize: 18,
        lineHeight: 26,
        padding: 16,
        fontWeight: "bold"
    }
});