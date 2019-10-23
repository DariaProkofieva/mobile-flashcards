import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function Deck() {
  return (
    <View style={styled.container}>
      <TouchableHighlight
        style={styled.btn}
        onPress={() => {
          alert("You tapped the button!");
        }}
        underlayColor="#d4271b"
      >
        <Text style={styled.btnText}>Here will be a name of my first deck</Text>
      </TouchableHighlight>
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
