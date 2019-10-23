import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class NewDeck extends React.Component {
  state = {
    newDeckName: ""
  };
  handleButtonPress = () => {
    alert("You tapped the button!And here is your text ");
  };
  render() {
    return (
      <KeyboardAvoidingView style={styled.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          type="text"
          placeholder="Deck title"
          //   value={this.state.newDeckName}
          onChangeText={newDeckName => this.setState({ newDeckName })}
        />
        <Button
          style={styled.btn}
          title="SUBMIT"
          onPress={() => console.log(`${this.state.newDeckName}`)}
        />
        {/* Delete Deck Button */}
      </KeyboardAvoidingView>
    );
  }
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

export default NewDeck;
