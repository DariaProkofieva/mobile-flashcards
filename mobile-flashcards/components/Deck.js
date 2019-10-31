import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
import { withNavigation } from "react-navigation";

class Deck extends React.Component {
  render() {
    const { deck } = this.props;

    console.log("ONE DECK");
    console.log(deck);
    return (
      <View style={styled.container}>
        <Button
          // title={deck.title}
          title="hello"
          onPress={() => this.props.navigation.navigate("DeckView", { deck })}
        >
          hello
          {/* {deck.title} */}
        </Button>
        {/* <Text>{deck.questions.length} Cards</Text> */}
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

export default withNavigation(Deck);
