import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { withNavigation } from "react-navigation";

class IndividualDeckView extends React.Component {
  state = {
    text: ""
  };
  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    const cards = deck.questions.length > 1 ? " Cards" : " Card";
    return (
      <View style={styled.container}>
        <Text style={styled.text}>{deck.title}</Text>
        <Text style={styled.text}>
          {deck.questions.length}
          {cards}
        </Text>
        <Button
          style={styled.btn}
          title="Add Card "
          onPress={() => this.props.navigation.push("AddQuestion", { deck })}
        />
        <Button
          style={styled.btn}
          title="Start Quiz"
          onPress={() => this.props.navigation.push("YourQuiz", { deck })}
        />
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    width: 150
  },
  btnText: {
    color: "#fff"
  },
  text: {
    textAlign: "center",
    fontSize: 24
  }
});

export default withNavigation(IndividualDeckView);
