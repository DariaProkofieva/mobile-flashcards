import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import Deck from "./Deck";

export default function Decks() {
  return (
    <View style={styled.container}>
      <Deck />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5
  },
  btnText: {
    color: "#fff"
  }
});
