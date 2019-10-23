import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class IndividualDeckView extends React.Component {
  state = {
    text: ""
  };
  handleButtonAddCard = () => {
    console.log("You pressed add card button");
  };
  handleButtonStartQuiz = () => {
    console.log("You pressed Start Quiz button");
  };
  render() {
    return (
      <View style={styled.container}>
        <Text>Your Deck Name</Text>
        <Text>3 Cards</Text>
        <Button
          style={styled.btn}
          title="Add Card "
          onPress={this.handleButtonAddCard}
        />
        <Button
          style={styled.btn}
          title="Start Quiz"
          onPress={this.handleButtonStartQuiz}
        />
      </View>
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

export default IndividualDeckView;
