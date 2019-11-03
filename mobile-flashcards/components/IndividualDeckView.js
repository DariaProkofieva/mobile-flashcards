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
    console.log("ONE DECK FROM INDDECKVIEW");
    console.log(deck);
    return (
      <View style={styled.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} Cards</Text>
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
    flex: 1
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: "center",
    // justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224"
    // padding: 2,
    // paddingLeft: 30,
    // paddingRight: 30
    // justifyContent: "center",
    // alignContent: "center",
    // borderRadius: 5
  },
  btnText: {
    color: "#fff"
  }
});

export default withNavigation(IndividualDeckView);
