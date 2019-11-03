import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class Deck extends React.Component {
  render() {
    const { deck } = this.props;
    return (
      <View style={styled.container}>
        <Button
          title={deck.title}
          onPress={() => this.props.navigation.navigate("DeckView", { deck })}
        ></Button>
        <Text>{deck.questions.length} Cards</Text>
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 20
  },
  btn: {
    backgroundColor: "#E53224",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    flex: 1
  },
  btnText: {
    color: "#fff"
  }
});

export default withNavigation(connect()(Deck));
